import React from "react";
import MediaCard from "./Card";

function CardContainer({ data }) {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      {data.map((element) => (
        <MediaCard {...element} />
      ))}
    </div>
  );
}

export default CardContainer;
