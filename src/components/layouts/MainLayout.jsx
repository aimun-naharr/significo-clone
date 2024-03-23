import React from "react";

export default function MainLayout({ children }) {
  return (
    <div data-scroll-container className="main w-full section">
      {children}
    </div>
  );
}
