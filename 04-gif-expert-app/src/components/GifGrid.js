import React from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=gghj2O6zlKZcCpVcN7YGa6zCQSCzz1Bv&tag=&rating=g";
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  getGifs();
  return (
    <>
      <h3> {category} </h3>
    </>
  );
};
