import React from 'react'
import { Link } from 'react-router-dom';
import bannerimage from "../assets/pizza.jpeg";
import "../style/Home.css";
function Home() {
  return (
    <div className="home" style={{backgroundImage:` url(${bannerimage})` }}>
      <div className="headerContainer" >
        <h1>Bharath's Pizzeria</h1>
        <p>PIZZA TO FIT ANT TASTE</p>
        <Link to="/menu"><button> ORDER NOW</button></Link>
      </div>
    </div>
  )
}

export default Home