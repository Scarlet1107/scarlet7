// app/page.tsx (サーバーコンポーネント)
import React from "react";
import StarField from "./StarField";

export default function Home() {
  return (
    <main className="w-full min-h-screen max-h-full bg-black text-white">
      <StarField />
      <div className="absolute top-4 left-4">
        <h1 className="text-xl">Infinite Starfield</h1>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-2xl font-semibold">Welcome to my webpage</h2>
        <h3 className="text-2xl font-semibold">My name is Scarlet, web app engineer</h3>
      </div>
    </main>
  );
}
