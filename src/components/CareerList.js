import React, { Component } from 'react'
import careers from "../mockdata/data"

const  CareerList = () => {
  return (
    <div>
      <h2> Carrers </h2>
      <ol>
    {careers.map(career =>(
        <li key={career.id}>{career.title} : {career.description}</li>
    ))}
    </ol>
    </div>
  );
};

export default CareerList;
