import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  // Using useMemo to memoize the computed value
  const computedValue = useMemo(() => {
    console.log("Recomputing computedValue...");
    return count
  }, []); // Recalculate only when 'data' changes

  return (
    <div>
      <h1>Computed Value: {computedValue}</h1>
      <h1>Computed data: {data}</h1>
      <button onClick={() => setData("Updated Data")}>Update Data</button>
      <button onClick={() => setCount(count+1)}>Increment Count</button>
    </div>
  );
};

export default UseMemo;



// Scenario: Filtering a Large List



import React, { useState, useMemo } from 'react';

const Tests = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [count, setCount] = useState(0);

    // Static dataset (no need to re-render)
    const users = [
        'Alice',
        'Bob',
        'Charlie',
        'David',
        'Edward',
        'Fiona',
        'George',
        'Hannah',
        'Isabel',
        'Jack',
        'Karen',
    ];

    // Expensive filtering logic
    const filteredUsers = useMemo(() => {
        console.log('Filtering users...');
        return users.filter(user => user.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]); // `users` removed from dependencies

    return (
        <div>
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Click Me: {count}</button>
            
            <h3>Filtered Users:</h3>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user}>{user}</li>
                ))}
            </ul>
        </div>
    );
};

export default Tests;



