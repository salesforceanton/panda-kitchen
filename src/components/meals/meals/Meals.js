import React from "react";
import PromoText from "../../layout/promoText/PromoText";
import MealsList from "../mealsList/MealsList";

import { DUMMY_MEALS } from "../../../data/meals_data";

const Meals = () => {
    return (
       <React.Fragment>
            <PromoText/>
            <MealsList data={DUMMY_MEALS}></MealsList>
       </React.Fragment>
    )
}

export default Meals;