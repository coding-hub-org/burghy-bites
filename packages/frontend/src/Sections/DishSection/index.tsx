import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import LoaderContext from "../../Context/Loader";
import Dish from "../../Context/Models/dish";

const DishSection: React.FC = () => {
  let { dish, venue } = useParams();
  const iniDish: Dish = {
    name: dish,
    calories: 0,
    isHealthy: false,
    recipe: [""]
  };

  let loader = useContext(LoaderContext);
  const [dishData, setDish] = useState(iniDish);
  useEffect(() => {
    const getDish = async () => {
      let dishToGet = await loader.loadDish(dish);
      console.log(dishToGet);
      setDish(prev => {
        return dishToGet ? dishToGet : iniDish;
      });
    };
    getDish();
  }, [dish, loader]); //trigger when component did mount
  return (
    <div>
      <div className="header">
        <h1>{venue} </h1>
      </div>
      <div className="grid">
        <div className="imgbox">
          <img
            src="http://www.pngplay.com/wp-content/uploads/1/Bread-Sandwich-Transparent-Background.png"
            alt="oh poop"
          />
        </div>
        <div className="textbox">
          <div className="dishName">
            <h1>{dishData.name}</h1>
          </div>
          <h3>Calories: {dishData.calories}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est
            possimus, culpa necessitatibus excepturi, optio aut atque repellat
            beatae iusto dolorum aspernatur qui ipsum illum non magnam
            assumenda, nemo dolores! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Hic unde molestias voluptas velit natus sint at
            deleniti officia maxime perspiciatis quae, deserunt, nobis cumque
            dolores neque dolor iste ipsa ducimus!
          </p>
        </div>
      </div>
      <div>
        <h1>Ingredients</h1>
        <div>
          {dishData.recipe?(dishData.recipe.reduce((prev, cur) => {
            return prev + ", " + cur;
          })):null}
        </div>
      </div>
      <div>COMMENT</div>
      <div className="wrapper">
        <input
          type="text"
          name="Comment"
          className="commentBox"
          placeholder="Tell us! Does it taste good?"
        />
      </div>
      <div className="wrapper">
        <input type="submit" className="submitBox" />
      </div>
    </div>
  );
};
export default DishSection;
