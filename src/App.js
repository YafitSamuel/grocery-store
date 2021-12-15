import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Item from "./components/Item";
import { Component } from "react";
import Add from "./components/Add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["appel", "banana", "tomato", "watermelon", "moshe"],
      
    };
  }

  AddNewVegetable(newItem){
    this.state.list.push(newItem);
    this.setState({ list: this.state.list });
  }

  render() {
    const items = [];

    for (let i = 0; i < this.state.list.length; i++) {
      items.push(<Item name={this.state.list[i]} />);
    }

    return (
      <div className="App">
        <Title />
        {items}
        <Add onAdd={(newItem)=>this.AddNewVegetable(newItem)}  type="vegetable"/>
        <Add onAdd={(newItem)=>this.AddNewVegetable(newItem)}  type="spice"/>
        <Add onAdd={(newItem)=>this.AddNewVegetable(newItem)}  type="cans"/>
      </div>
    );
  }
}

export default App;
