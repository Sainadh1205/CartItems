import React from "react";
import "./App.css";
import Navhead from "./components/Navhead";
import Products from './components/Products'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }


  render() {
    return (
      <div className="App">
        <Navhead />
        <Products />
      </div>
    );
  }
}

export default App;

// import Navhead from './components/Navhead'
// import Products from "./components/Products";

// {
//   /* <Navhead />
// <Products /> */
// }
