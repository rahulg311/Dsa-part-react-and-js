import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function InfiniteScrollExample() {
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prev) => [...prev, ...Array.from({ length: 20 })]);
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {items.map((_, index) => (
        <div key={index} style={{ height: "50px", border: "1px solid #ddd" }}>
          Item {index + 1}
        </div>
      ))}
    </InfiniteScroll>
  );
}



// When to Use Each Approach
// Simple Cases: Use browser APIs or refs.
// Smooth Navigation: Use libraries like react-scroll.
// Infinite Scrolling: Use react-infinite-scroll-component.
// Advanced Effects: Use libraries like react-scroll-parallax.



