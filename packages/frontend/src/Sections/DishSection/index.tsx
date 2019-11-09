import React from "react";
import { useParams } from "react-router-dom";
import "./index.scss";

const DishSection: React.FC = () => {
  let { dish, venue } = useParams();
  return (
    <div>
      <div className="header">
        <h1>{venue}</h1>
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
            <h1>{dish}</h1>
          </div>
          <h3>Calories: XXX</h3>
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

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla
          optio fuga voluptate eius quisquam. Qui porro necessitatibus labore
          earum officiis officia, sint nemo sapiente eligendi incidunt cum odio.
          Ut?

        </div>
      </div>
    </div>
  );
};
export default DishSection;
