// src/components/Home.js

import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      setShows(data);
    }
    load();
  }, []);

  return (
    <div className="flex flex-row">
      <div className="">
        {shows?.map((show) => (
          <Card key={show.show.id} data={show.show} />
        ))}
      </div>
      <section className=""></section>
    </div>
  );
};
// export async function loader() {
//   const shows = await GetData();

//   //   console.log(data);
//   return shows;
// }
export default Home;
