import React, { useState, useMemo, useCallback } from "react";
import ThankYouPage from "./ThankYouPage";

const UseCallback = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  // Using useMemo to memoize the computed value
  const funtiondata = useCallback(() => {
    console.log("Recomputing computedValue...");
    return count
  }, [count]); // Recalculate only when 'data' changes


  return (
    <div>
      {/* <h1>Computed Value: {computedValue}</h1> */}
      <h1>Computed data: {count}</h1>
      <ThankYouPage funtiondata={funtiondata} count={count}/>
      {/* <button onClick={() => setData("Updated Data")}>Update Data</button> */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default UseCallback;



