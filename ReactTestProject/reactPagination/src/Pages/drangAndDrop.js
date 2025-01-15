import React, { useState } from 'react';

const DragAndDrop = () => {
  const [items, setItems] = useState([
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);
  console.log("draggedItem",draggedItem)

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  const handleDrop = (e, dropZoneIndex) => {
    console.log("draggedItem1",dropZoneIndex)
    e.preventDefault();

    const reorderedItems = [...items];
    const draggedIndex = items.findIndex((i) => i.id === draggedItem.id);
    const dropIndex = dropZoneIndex;

    // Remove the dragged item from its original position
    const [removedItem] = reorderedItems.splice(draggedIndex, 1);

    // Insert the dragged item into the new position
    reorderedItems.splice(dropIndex, 0, removedItem);

    setItems(reorderedItems);
  };


  return (
    <div>
      <h2>Drag and Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          
            style={{
              padding: '8px',
              margin: '4px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              cursor: 'move',
            }}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDrop;
