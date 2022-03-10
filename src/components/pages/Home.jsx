import { useEffect, useState } from "react";
import Games from "../Games";
import Hero from "../layout/Hero";
import Selection from "../layout/Selection";
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [state, setState] = useState([]);
  const [month, setMonth] = useState("10");
  const [year, setYear] = useState("19");

  const random = Math.floor(Math.random() * 10);
  console.log(random);

  useEffect(() => {
    const getData = async () => {
      const state = await fetch(
        `https://api.rawg.io/api/games?key=67d9f6fe9c284cfab1e49ef39919f633&dates=200${random}-0${random}-01,200${random}-0${random}-30&platforms=18,1,7`
      );
      const data = await state.json();
      console.log(data.results);
      setState(data.results);
    };
    getData();
  }, []);

  return (
    <div>
      {/* <Hero /> */}
      <Selection />
      <div className="flex flex-row justify-evenly flex-wrap">
        {state?.map((items) => (
          <Games
            key={items.id}
            img={items.background_image}
            released={items.released}
            name={items.name}
            ratings={items.rating_top}
            suggestion={items.suggestions_count}
            review={items.reviews_count}
            ratings_count={items.ratings_count}
            updated={items.updated}
            genres={items.genres}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
