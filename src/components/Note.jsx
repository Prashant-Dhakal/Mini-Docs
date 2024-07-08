import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Note = ({ notes, area }) => {
  const [positions, setpositions] = useState([]);

  const determinNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    const newPositions = notes.map(() => (
      {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
      }
  ));

    setpositions(newPositions);
  };

  useEffect(() => {
    determinNewPosition();
  }, [notes]);

  return (
    <>
      <div className="w-full bg-zinc-800 text-white">
        {notes.map((item, index) => {
          const position = positions[index] || { x: 0, y: 0 };

          return (
            <motion.div
              drag
              dragConstraints={area}
              key={index}
              className="text-black font-serif text-center"
              style={{
                position: "absolute",
                left: position?.x,
                top: position?.y,
                border: "1px solid black",
                userSelect: "none",
                padding: "10px",
                width: "200px",
                cursor: "move",
                backgroundColor: "lightyellow",
              }}
            >
              <h1>📌 {item.title}</h1>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Note;
