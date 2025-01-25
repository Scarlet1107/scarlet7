// app/page.tsx (サーバーコンポーネント)
import React from "react";
import StarField from "./StarField";

export default function Home() {
  return (
    <main className="w-full min-h-screen max-h-full text-white bg-black">
      <StarField />
      <div className="absolute top-4 left-4">
        <h1 className="text-xl">Scarlet.net</h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-2xl font-semibold">Welcome to my webpage</h2>
        <h3 className="text-2xl font-semibold">
          My name is Scarlet, web app engineer
        </h3>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg m-4">
        <h3 className="text-lg font-bold mb-2">アプリ紹介（カード形式で）</h3>
        <p>ここにアプリの紹介文が入ります。</p>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg m-4">
        <h3 className="text-lg font-bold mb-2">About Me</h3>
        <p>ここに自己紹介文が入ります。</p>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg m-4">
        <h3 className="text-lg font-bold mb-2">技術スタック</h3>
        <p>ここに技術スタックの説明が入ります。</p>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg m-4 mb-0">
        <h3 className="text-lg font-bold mb-2">Contact (Email)</h3>
        <p>ここに連絡先の情報が入ります。</p>
      </div>
    </main>
  );
}
