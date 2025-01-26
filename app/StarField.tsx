"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const StarField = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // カメラが (0, 0, 5) にある想定
    const cameraPosition = new THREE.Vector3(0, 0, 5);
    const minDistance = 20; // カメラから20以上離れた位置のみ許可

    // カメラ周辺 minDist 未満の場合は再度乱数を取り直す
    function getRandomPositionOutsideCamera(minDist: number): THREE.Vector3 {
      let x, y, z;
      const pos = new THREE.Vector3();
      do {
        x = (Math.random() - 0.5) * 1000;
        y = (Math.random() - 0.5) * 1000;
        z = (Math.random() - 0.5) * 1000;
        pos.set(x, y, z);
      } while (pos.distanceTo(cameraPosition) < minDist);
      return pos;
    }

    // シーン
    const scene = new THREE.Scene();

    // カメラ
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.copy(cameraPosition);

    // レンダラー
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // 背景を透明に
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // リサイズ対応
    const handleResize = () => {
      camera.aspect =
        mountRef.current!.clientWidth / mountRef.current!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current!.clientWidth,
        mountRef.current!.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    // 星の生成
    const starCount = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    // 初期配置：カメラ近く(minDistance以内)を避けて生成
    for (let i = 0; i < starCount; i++) {
      const pos = getRandomPositionOutsideCamera(minDistance);
      positions[i * 3 + 0] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // アニメーションループ
    let reqId: number;
    const speed = 0.5; // 星が手前に来る速度
    const zThreshold = 50; // ある程度手前を通過したら再配置する閾値

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const positionsArray = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        const idx = i * 3;

        // z 座標を手前方向に移動
        positionsArray[idx + 2] += speed;

        // 閾値を超えたら、カメラ周辺を避けて新たな場所へ再配置
        if (positionsArray[idx + 2] > zThreshold) {
          const newPos = getRandomPositionOutsideCamera(minDistance);
          positionsArray[idx + 0] = newPos.x;
          positionsArray[idx + 1] = newPos.y;
          positionsArray[idx + 2] = newPos.z;
        }
      }

      // 変更を Three.js に通知
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // クリーンアップ
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen fixed pointer-events-none" ref={mountRef} />
  );
};

export default StarField;
