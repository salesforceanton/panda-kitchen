import React from "react";
import PromoText from "../../layout/promoText/PromoText";
import MealsList from "../mealsList/MealsList";

const Meals = (props) => {
    return (
       <React.Fragment>
            <PromoText/>
            <MealsList data={props.data}></MealsList>
       </React.Fragment>
    )
}

export default Meals;