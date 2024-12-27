"use client";

import React from "react";
import SearchBar from "./components/SearchBar";

const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <div>REPO-SCOPE</div>
      <SearchBar />
    </div>
  );
};

export default HomePage;
