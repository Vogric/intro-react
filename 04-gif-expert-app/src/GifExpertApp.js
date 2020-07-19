import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Serie1", "Serie2", "Serie3"]);

  // const handleAdd = () => {
  //   setcategories([...categories, "Serie4"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};
