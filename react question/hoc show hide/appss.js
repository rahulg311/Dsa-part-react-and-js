import React from 'react';
import Hoc from './Hoc';
import data from './data';

const Appss = () => {

    const Myocdata = Hoc(data)
  return (
    <div>
    <Myocdata/>
      </div>
  );
}

export default Appss;
