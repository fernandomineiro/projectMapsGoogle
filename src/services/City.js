import React, { useState } from "react";
const City = () => {
  const [myCity] = useState([
    {
      id: "0",
      name: "Lambari",
      lat: 51.221523,
      lng: -0.596995,
    },
    {
      id: "1",
      name: "Varginha",
      lat: 51.206777,
      lng: -0.563556,
    },
    {
      id: "2",
      name: "Pouso Alegre",
      lat: 51.206777,
      lng: -0.546255,
    },
    {
      id: "3",
      name: "São Lourenço",
      lat: 51.23313,
      lng: -0.59202,
    },
    {
      id: "4",
      name: "São Paulo",
      lat: 51.232712,
      lng: -0.540188,
    },
  ]);
  return myCity;
};

export default City;
