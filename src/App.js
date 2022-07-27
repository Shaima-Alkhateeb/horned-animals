// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from "./Component/Modal";
import data from './data.json';
import React, {Component}  from 'react';
import SelectedBeast from './SelectedBeast';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeast: data,
      selectedBeast: {},
      showModal: false
    }
  }

  displayModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }


  render () {
    return (
      <div className="App">
        <Header />
        <Main  allBeast={this.state.allBeast} displayModal={this.displayModal}  />
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </div>

    );
  }
}

export default App;
