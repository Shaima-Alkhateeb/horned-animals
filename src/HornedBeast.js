import React from "react";


class HornedBeast extends React.Component {
    render() {
        return (
            <>
            {/* <h2>{this.props.title}</h2> */}
            <div className="hornedBeast">
            <img src={this.props.imgURL} alt={this.props.title} />
            <p>{this.props.description} </p>
            </div>
            
            </>
            

        );
    }

}

export default HornedBeast;