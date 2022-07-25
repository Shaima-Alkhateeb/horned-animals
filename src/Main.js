import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render() {
        return (
            <>
             <HornedBeast title='Male impala' imgURL='https://i.pinimg.com/736x/44/a1/5e/44a15e7692e047fbf3cd35300ab990bd.jpg' alt='Young male Impala' width="500" height="600" description='Young male Impala Mikumi National Park, Tanzania.' />
             <HornedBeast title='Kudu' imgURL='https://www.rhinorest.com/wp-content/uploads/2020/09/animals-with-horns.jpg' alt='Young male Impala' width='500' height='600' description='The greater kudu definitely boasts one of the grandest pairs of horns. On average, they are an impressive 48 inches in length (122 cm) and average two and a half twists in the length of the horn. Kudus are tall, large antelopes and are always very exciting to spot.' />
            </>
            
        );
    }

}

export default Main;