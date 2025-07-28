import React, { useState } from "react";

function DragDrop() {
  const [droppedItem, setDroppedItem] = useState(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "This is a draggable item!");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    setDroppedItem(data);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart}
        style={{
          width: "200px",
          padding: "20px",
          marginBottom: "20px",
          backgroundColor: "lightblue",
          cursor: "grab",
        }}
      >
        Drag me!
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={allowDrop}
        style={{
          width: "300px",
          height: "150px",
          border: "2px dashed #888",
          padding: "20px",
        }}
      >
        Drop here
        <p>{droppedItem && `Dropped content: ${droppedItem}`}</p>
      </div>
    </div>
  );
}

export default DragDrop;
