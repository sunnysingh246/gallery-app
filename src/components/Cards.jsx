import React from "react";

const Cards = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-52"
    >
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-2">
        
        <div className="h-52 overflow-hidden">
          <img
            src={elem.download_url}
            alt={elem.author}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-3">
          <h2 className="font-bold text-sm text-center text-white truncate">
            📸 {elem.author}
          </h2>

          <p className="text-xs text-gray-400 text-center mt-1">
            Click to view image
          </p>
        </div>

      </div>
    </a>
  );
};

export default Cards;