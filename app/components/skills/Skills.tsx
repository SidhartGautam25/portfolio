"use client";

import React from "react";

const skillData = {
  Languages: [
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", // Python
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", // JavaScript
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", // TypeScript
    "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", // C++
  ],
  Frameworks: [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Django_logo.svg", // Django
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", // Node.js
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", // Express
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", // Tailwind CSS
  ],
  Databases: [
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", // MongoDB
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", // PostgreSQL
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/MySQL_logo.png", // MySQL
    "https://upload.wikimedia.org/wikipedia/commons/6/62/Redis_Logo.svg", // Redis
    "https://upload.wikimedia.org/wikipedia/commons/e/e2/Snowflake_Logo.svg", // Snowflake
  ],
  Tools: [
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", // GitHub
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", // Git
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", // AWS
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", // Docker
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg", // Kubernetes
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg", // Nginx
  ],
};

const Skills: React.FC = () => {
  return (
    <div className="flex-1 grid grid-rows-4 gap-4 p-4">
      {/* Languages Section */}
      <div className="text-center">
        <p className="text-white text-lg font-bold mb-2 border-b border-gray-700 pb-1">
          languages
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {skillData.Languages.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Language ${index}`}
              className="w-10 h-10 grayscale"
            />
          ))}
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="text-center">
        <p className="text-white text-lg font-bold mb-2 border-b border-gray-700 pb-1">
          frameworks
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {skillData.Frameworks.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Framework ${index}`}
              className="w-10 h-10 grayscale"
            />
          ))}
        </div>
      </div>

      {/* Databases Section */}
      <div className="text-center">
        <p className="text-white text-lg font-bold mb-2 border-b border-gray-700 pb-1">
          databases
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {skillData.Databases.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Database ${index}`}
              className="w-10 h-10 grayscale"
            />
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="text-center">
        <p className="text-white text-lg font-bold mb-2 border-b border-gray-700 pb-1">
          tools
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {skillData.Tools.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Tool ${index}`}
              className="w-10 h-10 grayscale"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
