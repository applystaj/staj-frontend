import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navigation from "./navigation";
import Header from "./header";

export function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="pt-16">
        <Navigation />
      </div>

      <main className="min-h-screen mt-28 w-4/5 mx-auto pt-4">
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
