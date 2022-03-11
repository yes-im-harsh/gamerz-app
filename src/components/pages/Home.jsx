import { useEffect, useState, useContext } from "react";
import DateContext from "../../context/DatesContext";
import Games from "../Games";
import Hero from "../layout/Hero";
import Selection from "../layout/Selection";

// const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [state, setState] = useState([]);
  const { newmonth, newyear } = useContext(DateContext);
  console.log(newyear);
  console.log(newmonth);

  useEffect(() => {
    const getData = async () => {
      const state = await fetch(
        `https://api.rawg.io/api/games?key=67d9f6fe9c284cfab1e49ef39919f633&dates=20${newyear}-${newmonth}-01,20${newyear}-${newmonth}-30&platforms=18,1,7`
      );
      const data = await state.json();
      console.log(data.results);
      setState(data.results);
    };
    getData();
  }, [newmonth, newyear]);

  return (
    <div>
      <Hero />
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
