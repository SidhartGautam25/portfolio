"use client";
import React, { useState } from "react";

interface TerminalProps {
  onCommand: (command: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onCommand }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedInput = input.trim();

      if (trimmedInput === "cls") {
        setHistory([]); // Clear terminal history
      } else {
        setHistory((prev) => [...prev, trimmedInput]);
        onCommand(trimmedInput); // Trigger parent callback
      }

      setInput(""); // Clear input
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
    <div className="bg-black text-green-500 h-full flex flex-col border border-gray-700 rounded-lg overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-3 py-2 border-b border-gray-700">
        {/* Left Side: Icon and Title */}
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Icon-Powershell.png"
            alt="Terminal Icon"
            className="w-4 h-4"
          />
          <span className="text-white font-semibold text-sm">
            Terminal // For Help $ navneet need hep
          </span>
        </div>
        {/* Right Side: Traffic Lights */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="flex-grow overflow-y-auto p-3">
        {/* Command History */}
        {history.map((cmd, index) => (
          <div key={index} className="mb-2">
            <span className="text-green-500">navneet@portfolio:~$ </span>
            {renderColoredCommand(cmd)}
          </div>
        ))}

        {/* Input Area */}
        <div className="flex items-center">
          <span className="text-green-500">navneet@portfolio:~$ </span>
          <div className="ml-2 flex items-center relative w-full">
            {/* Styled Command */}
            {renderColoredCommand(input)}
            {/* Invisible Input */}
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
  );
};

export default Terminal;
