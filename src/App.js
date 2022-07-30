// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import FormComponent from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from "./Component/Modal";
import data from './data.json';
import React, {Component}  from 'react';
import SelectedBeast from './SelectedBeast';
import { Form } from 'react-bootstrap';



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

  // for the form
  filterBeastByNumber = (e) => {
    const horeNumber = parseInt(e.target.value);
    let filteredDate = data; // return all the beast
    if(horeNumber) {
      filteredDate = data.filter(item => item.horns === horeNumber);
    }
    this.setState({allBeast: filteredDate})
  }


  render () {
    return (
      <div className="App">
        <Header />
        <FormComponent />
        <br />
        {/* pass it to another componant */}
        <Main  allBeast={this.state.allBeast} displayModal={this.displayModal} filterBeastByNumber={this.filterBeastByNumber} />
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />
        <Form filterBeastByNumber={this.filterBeastByNumber}/>
        <Footer />
      </div>

    );
  }
}

export default App;
