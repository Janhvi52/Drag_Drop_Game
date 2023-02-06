import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
import Target from "./Target";
import header from "./images/bgheader.png";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext, DropTarget } from "react-dnd";
const update = require("immutability-helper");

class App extends Component {
  state = {
    items: [
      { id: 1,name:"Ice Cubes",url:"/images/icecube.png"},
      { id: 2,name:"Whisky", url: "/images/bgwhiskey.png" },
      { id: 3,name:"Mixers",url:"/images/bgcola.png"},
      { id: 4,url:"/images/bgsoda.png"},
      { id: 5,url:"images/bgorange.png"},
      { id: 6,name:"Garnishes",url:"/images/lemon.png"}
    ],
    // combo: [
    //   { id: 1,name:"Ice Cubes",url:"/images/icecube.png"},
    //   { id: 2,name:"Whisky", url: "/images/bgwhiskey.png" },
    //   { id: 4,url:"/images/bgsoda.png"},
    //   { id: 6,url:"/images/lemon.png"}
    // ],
    // attempts:0,
    // message: '',
  };

    deleteItem = (id) => {
   
    this.setState((prevState) => {
     
      return {
        items: prevState.items.filter((item) => item.id !== id),
        
      };
    });
  };

  render() {
    return (
      
      <div className="App">
        <header className="header">
          <div className="head-image">
            <img
              src={header}
              style={{ display: "inline", width: "100vw", height: "100px" }}
            ></img>
          </div>
          <div className="text">
            <h3>
              To complete your Highball
              <br />
              Choose the Right
              <br />
              Whiskey, Mixer and Garnish!
            </h3>
          </div>
        </header>
        <div className="first">
          <Target/>
        <div className="App-intro">
          <div className="app-container">
            <div className="item-container">
            
              {this.state.items.map((item,index) => (
                <Item key={item.id} item={item} 
                  handleDrop={(id) => this.deleteItem(id)}
                />
                
              ))}
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);


                // items:prevState.items.filter((item.id==1 && item.id==2 && item.id==4 && item.id==6)?<Landing/>:<Win/>)