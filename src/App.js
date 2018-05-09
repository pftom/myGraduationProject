import React, { Component } from 'react';
import $ from 'jquery';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

import logo from './img/Dataformer.svg';
import search from './img/Search.svg';
import avatar from './img/avatar.svg';
import './css/App.css';

// import img
import waterItem1 from './img/waterItem1.png';
import waterItem2 from './img/waterItem2.png';
import waterItem3 from './img/waterItem3.png';
import waterItem4 from './img/waterItem4.png';
import waterItem5 from './img/waterItem5.png';
import waterItem6 from './img/waterItem6.png';
import waterItem7 from './img/waterItem7.png';
import waterItem8 from './img/waterItem8.png';

// waterItem
const waterLists1 = [
  waterItem7,
  waterItem6,
  waterItem1,
  waterItem2,
];

const waterLists2 = [
  waterItem5,
  waterItem3,
  waterItem4,
  waterItem8,
];

const navLists = [
  '比较类',
  '分布类',
  '流程类',
  '占比类',
  '区间类',
  '关联类',
  '趋势类',
  '时间类',
  '地图类',
];


// import components
import {
  Button,
} from './components/';

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}


export default App;

// {
//   waterLists.map((item, key) => (
//     <div className="grid-item">
//       <img src={item} alt="item" className="grid-img"/>
//     </div>
//   ))
// }

{/* <header className="App-header">
          <div className="headerItem">
            <button className="btn">探 索</button>
          </div>
          <div className="headerItem">
            <img src={logo} className="logo" alt="dataformer logo"/>
          </div>
          <div className="headerItem headerProfile">
            <img src={search} className="search" alt="search"/>
            <img src={avatar} className="avatar" alt="avatar"/>
          </div>
        </header>
        <div className="navbar">
          {
            navLists.map((listItem, key) => (
              <span key={key} className="navItem">{listItem}</span>
            ))
          }
        </div>

        <div className="container">
          <div className="column-2">
            {
              waterLists1.map((item, key) => (
                <div className="unit" style={{ backgroundImage: `url(${item})` }}></div>
              ))
            }
          </div>
              
          <div className="column-2">
            {
              waterLists2.map((item, key) => (
                <div className="unit" style={{ backgroundImage: `url(${item})` }}></div>
              ))
            }
          </div>
        </div> */}
