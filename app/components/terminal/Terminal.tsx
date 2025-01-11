"use client";
import React, { useState } from "react";

interface TerminalProps {
  onCommand: (command: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onCommand }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onCommand(input.trim());
      setInput("");
    }
  };

  const renderColoredCommand = (command: string) => {
    const words = command.split(" ");
    return (
      <>
        {words.map((word, index) => {
          let colorClass = "";
          if (index === 0) colorClass = "text-slate-400"; // First word
          else if (index === 1) colorClass = "text-green-400"; // Second word
          else colorClass = "text-white"; // Remaining words

          return (
            <span key={index} className={`${colorClass} mr-1`}>
              {word}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div className="bg-black text-green-500 p-4 h-full flex flex-col">
      <div className="mb-2">Terminal</div>
      <div className="flex-grow">
        <div className="bg-black p-2 border border-gray-700">
          <div className="flex items-center">
            <span className="text-green-500">navneet@portfolio:~$ </span>
            {/* Input Wrapper */}
            <div className="ml-2 flex items-center relative w-full">
              {/* Render the styled command */}
              {renderColoredCommand(input)}
              {/* Invisible input */}
              <input
                type="text"
                className="absolute left-0 bg-transparent text-transparent caret-green-500 outline-none w-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
