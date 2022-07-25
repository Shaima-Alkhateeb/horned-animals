import React from "react";


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          clickCounter: 0
        }
      }
    
      handleClick = () => {
        this.setState({clickCounter: this.state.clickCounter + 1})
      }


    render() {
        return (
            <>
            <h2>{this.props.title} </h2>
            <img src={this.props.image_url} alt={this.props.title} onClick={this.handleClick} />
            <div>❤ favorited: {this.state.clickCounter}</div>
            <p>{this.props.description} </p>
            
            </>
        );
    }
}

export default HornedBeast;