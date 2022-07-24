import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render() {
        return (
            <>
             <HornedBeast imgURL="https://upload.wikimedia.org/wikipedia/commons/5/53/Male_impala_profile.jpg"/>
             <HornedBeast title="Horned Animals"/>
            </>
            
        );
    }

}

export default Main;