
import React, { useState, useEffect, useRef } from 'react';

const SearchWithThrottle = () => {
  const [inputValue, setInputValue] = useState('');
  const [throttledValue, setThrottledValue] = useState('');
  const lastCallRef = useRef(0);
   const users = [
    'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
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

  useEffect(() => {
    const handleThrottle = () => {
      const now = Date.now();
     
      if (now - lastCallRef.current >= 5000) { // 1000ms = 1 second throttle interval
        setThrottledValue(inputValue);
        lastCallRef.current = now;
      }
    };

    handleThrottle();
  }, [inputValue]);

  useEffect(() => {
    if (throttledValue) {
      fetchData(throttledValue);
    }
  }, [throttledValue]);

  const fetchData = async (query) => {
    try {
        
const filterData = users.filter((user) =>
    user.toLowerCase().includes(inputValue.toLowerCase())
);
    //   const response = await fetch(`https://api.example.com/search?q=${query}`);
    //   const data = await response.json();
      console.log(filterData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchWithThrottle;






