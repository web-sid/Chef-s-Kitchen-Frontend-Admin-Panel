import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Picks for you</h2>
      <div className="food-list">
        {foodList.map((el, index) => {
          if (category === "All" || category === el.category) {
            return (
              <FoodItem
                key={index}
                id={el._id}
                name={el.name}
                description={el.description}
                price={el.price}
                image={el.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
