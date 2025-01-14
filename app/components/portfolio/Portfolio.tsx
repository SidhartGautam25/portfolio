"use client";
import React, { useState, useEffect } from "react";
import Left from "../left/Left";
import Terminal from "../terminal/Terminal";

const Portfolio: React.FC = () => {
  const [output, setOutput] = useState<string>("about"); // Default is "about"
  const [isTerminalVisible, setIsTerminalVisible] = useState<boolean>(true); // Terminal is visible by default

  const handleCommand = (command: string) => {
    console.log("command is ", command);
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
      case "navneet show about":
        setOutput("about");
        break;
      default:
        setOutput("notfound");
    }
  };

  // Toggle Terminal Visibility with Ctrl+T
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "a") {
      setIsTerminalVisible((prev) => !prev); // Toggle visibility
    }
  };

  // Add event listener for keypress
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="h-screen flex">
      {/* Output Area */}
      <div className={isTerminalVisible ? "flex-1" : "flex-1 w-full"}>
        <Left content={output} />
      </div>

      {/* Terminal Component */}
      {isTerminalVisible && (
        <div className="w-1/3">
          <Terminal onCommand={handleCommand} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
