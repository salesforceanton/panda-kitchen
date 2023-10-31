import React from "react";

import Header from "./components/layout/header/Header";
import Meals from "./components/meals/meals/Meals";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Meals/>
        </React.Fragment>
    );
}

export default App;
