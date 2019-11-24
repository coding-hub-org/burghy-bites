import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import LoaderContext from "../../Context/Loader";
import Dish from "../../Context/Models/dish";
import Review from "../../Context/Models/review";

const DishSection: React.FC = () => {
  let { dish, venue } = useParams();
  const iniDish: Dish = {
    name: dish,
    calories: 0,
    isHealthy: false,
    recipe: [""],
    imgURL:""
  };
  const commentBox = (review : Review)=>{
    return(
      <div>
        <h4>{review.author+"   >> STAR:  "}  <span>{review.score}</span></h4>
        {review.content}
      </div>
    )
  }
  let loader = useContext(LoaderContext);
  const [dishData, setDish] = useState(iniDish);
  const [isLoading, loaded] = useState(true);
  const [comments, setComments]=useState([]);
  useEffect(() => {
    const getDish = async () => {
      let dishToGet = await loader.loadDish(dish,venue);
      let commentToGet = await loader.loadComments(dish,venue);
      console.log(dishToGet);
      loaded(false);
      setDish(prev => {
        return dishToGet ? dishToGet : iniDish;
      });
      setComments(prev=>{
        return commentToGet? commentToGet : prev
      });
    };
    if (!isLoading) return;
    getDish();
  }, [isLoading, dish, loader, venue, iniDish]); //trigger when component did mount
  return (
    <div>
      <div className="header">
        <h1 className="blockBlack">{venue} </h1>
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
      <div className="blockYellow">
        <h1>Ingredients</h1>
        <div>
          {dishData.recipe
            ? dishData.recipe.reduce((prev, cur) => {
                return prev + ", " + cur;
              })
            : null}
        </div>
      </div>
      <div className="blockYellow">
        <div className="wrapper">
          <h4 className="header">comment</h4>
          <input
            type="text"
            name="Comment"
            className="commentBox"
            placeholder="Tell us! Does it taste good?"
          />
        </div>
        <div className="wrapper">
          <button type="submit" className="submitBox" >Submit</button>
        </div>
        <div>
          {comments.map(review =>{
            return commentBox(review);
          })}
        </div>
    </div>
  );
};
export default DishSection;
