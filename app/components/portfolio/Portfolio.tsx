"use client";
import React, { useState } from "react";
import Left from "../left/Left";
import Terminal from "../terminal/Terminal";

const Portfolio: React.FC = () => {
  const [output, setOutput] = useState<string>("");

  const handleCommand = (command: string) => {
    switch (command) {
      case "navneet show projects":
        setOutput("projects");
        break;
      case "navneet show experience":
        setOutput("experience");
        break;
      case "navneet show skills":
        setOutput("skills");
        break;
      case "help":
        setOutput("help");
        break;
      default:
        setOutput("notfound");
    }
  };

  return (
    <div className="h-screen flex">
      {/* Output Area */}
      <div className="flex-1">
        <Left content={output} />
      </div>

      {/* Terminal Component */}
      <div className="w-1/3">
        <Terminal onCommand={handleCommand} />
      </div>
    </div>
  );
};

export default Portfolio;
