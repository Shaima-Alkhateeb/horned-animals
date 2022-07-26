// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast';
// import Modal from "./Component/Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SelectedBeast />
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
