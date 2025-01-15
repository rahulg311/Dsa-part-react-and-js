import React, { useState, useEffect } from 'react';

const Debounced = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
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
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue); // Input को debounce value में सेट करना
    }, 500); // 500ms का debounce समय

    return () => {
      clearTimeout(handler); // पिछले timeout को क्लियर करना
    };
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue) {
      fetchData(debouncedValue); // API कॉल करना
    }
  }, [debouncedValue]);

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

export default Debounced;





