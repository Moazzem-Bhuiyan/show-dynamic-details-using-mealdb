"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const getDetails = async (idMeal) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const data = await res.json();
  return data.meals ? data.meals[0] : null; // Meals array might be returned; grab the first meal
};

const Page = ({ params }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails(params.idMeal);
      setMeal(data);
    };

    fetchData();
  }, [params.idMeal]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>

     <div className=" md:w-1/2 my-10 m-auto space-y-2 shadow-2xl p-5">
     <Image
        src={meal.strMealThumb}
        alt="Description of the image"
        width={500}
        height={300}
        className="rounded w-[50%] m-auto"
      />

      <h1 className="text-2xl font-bold ">Details of {meal.strMeal}</h1>
      <p className="font-bold ">Category: {meal.strCategory}</p>
      <p className=" font-semibold"><span className="font-bold">Instructions:</span> {meal.strInstructions}</p>
      {/* Add more meal details as needed */}
      
     </div>
    </div>
  );
};

export default Page;
