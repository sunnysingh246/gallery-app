import React from "react";

const Cards = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="h-44 w-44 overflow-hidden rounded-xl">
        <img
          src={elem.download_url}
          alt={elem.author}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <h2 className="font-bold text-lg mt-2 text-center">
        {elem.author}
      </h2>
    </a>
  );
};

export default Cards;