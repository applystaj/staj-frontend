import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./navigation";

export function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Navigation />
      <main className="min-h-screen ">
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
