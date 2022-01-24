import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <header className="bg-sky-500 p-5 text-white">
        <h1>STUBRO</h1>
      </header>
      <div className="bg-gray-50">
        <div className="container mx-auto py-5 px-3">{children}</div>
      </div>
      <footer className="bg-sky-500 p-5 text-white">FOOTER</footer>
    </div>
  );
}
