import React, { Component } from 'react';
import $ from 'jquery';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import styled, { keyframes, ThemeProvider, withTheme, css } from 'styled-components';

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

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

const Icon = styled.svg`
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;


class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Link href="#">
          <Icon viewBox="0 0 20 20">
            <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z"/>
          </Icon>
          <Label>Hovering my parent changes my style!</Label>
        </Link>
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
