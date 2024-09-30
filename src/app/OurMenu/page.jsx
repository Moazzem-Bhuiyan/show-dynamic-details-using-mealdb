"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );

      const data = await res.json();
      setMeals(data.meals || []);
    };

    fetchApi();
  }, []);

  const searchMeals = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    setMeals(data.meals || []); // Corrected here
  };

  return (
    <div className="">
      <div className="mt-20 flex justify-center">
        <input
          className="outline-none rounded-s-full p-1 px-3 text-white bg-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Corrected to setSearch
          type="text"
          placeholder="Search your Meal"
        />
        <button
          onClick={searchMeals}
          className="p-1 bg-orange-500 rounded-e-full"
        >
          Search
        </button>
      </div>

      <div>
        {meals && meals.length > 0 ? (

          <div className=" grid md:grid-cols-4 gap-10 mt-10 p-10">
            {meals.map((meal) => (
              <div className=" shadow-2xl space-y-1 rounded-md" key={meal.idMeal}>
                <Image
                  src={meal.strMealThumb}
                  alt="Description of the image"
                  width={500}
                  height={300}
                  className="w-full rounded"
                />

                <h1 className="text-2xl font-semibold px-5">  {meal.strMeal} </h1>
                <h1 className="text-xl font-semibold px-5">  {meal.strCategory} </h1>
                <div className=" flex justify-center "><Link href={`/OurMenu/${meal.idMeal}`}><button className="bg-orange-400 my-5 rounded-md px-5 py-1 text-white ">view details</button></Link></div>
              </div> // Added key for better rendering
            ))}
          </div>
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
};

export default Page;
