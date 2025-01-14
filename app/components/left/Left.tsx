"use client";

import React from "react";
import Skills from "../skills/Skills";
import About from "../about/About";

interface OutputProps {
  content: string;
}

const Left: React.FC<OutputProps> = ({ content }) => {
  console.log("content ids ", content);
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col justify-between font-mono overflow-hidden">
      {/* Content Sections */}
      {content === "skills" && <Skills />}
      {content === "about" && <About />}

      {/* Terminal-Style Command Help */}
    </div>
  );
};

export default Left;
