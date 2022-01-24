import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";
import { RootState } from "../stores";

export default function Layout({ children }: { children: ReactNode }) {
  useAuth();
  const email = useSelector((state: RootState) => state.counter.email);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-sky-500 p-5 text-white">
        <h1>STUBRO</h1>
        <h1>{email}</h1>
      </header>
      <main className="bg-gray-50 flex-1">
        <div className="container mx-auto py-5 px-3">{children}</div>
      </main>
      <footer className="bg-sky-500 p-5 text-white">FOOTER</footer>
    </div>
  );
}
