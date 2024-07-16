import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./navigation";

export function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Navigation />
      <main className="min-h-screen mt-28 w-4/5 mx-auto">
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
