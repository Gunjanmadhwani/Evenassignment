import React from "react";

interface props {
  key: number;
  src: string;
  //   backgroundColor: string;
  name: string;
  experience: string;
  qualification: string;
  previousExp: string[];
  shortName: string;
}

const Card: React.FC<props> = ({
  key,
  src,
  name,
  experience,
  qualification,
  previousExp,
  shortName,
}) => {
  return (
    <div>
      <h3>{key}</h3>
      <image>{src}</image>
      <h2 className="text-red bold">{name}</h2>
      <h3>{shortName}</h3>
      <h3>{experience}</h3>
      <h3>{qualification}</h3>
      <p>{previousExp}</p>
    </div>
  );
};

export default Card;
