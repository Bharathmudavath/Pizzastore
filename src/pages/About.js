import React from 'react'
import Multiplepizza from "../assets/multiplePizzas.jpeg.jpg";
import "../style/About.css";
function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{backgroundImage: `url(${Multiplepizza})`}}
        ></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            
            <p> Welcome to our pizza restaurant! We take immense pride in serving the most delectable pizzas that are sure to tantalize your taste buds. Established with a passion for creating the perfect slice, our restaurant has become a haven for pizza enthusiasts from far and wide. Nestled in the heart of the city, we provide a cozy and inviting atmosphere for you to enjoy your dining experience. Our skilled chefs meticulously handcraft each pizza using only the finest, freshest ingredients sourced locally. Whether you crave a classic Margherita, a sizzling pepperoni feast, or a gourmet combination of unique flavors, our diverse menu has something to satisfy every palate. We strive to create a memorable culinary journey for our customers, ensuring every bite is a burst of deliciousness. Complemented by friendly and attentive staff, we aim to create an unforgettable dining experience that keeps you coming back for more. Join us and indulge in the pizza paradise we have created, where passion and flavor come together to create an exceptional meal.</p>
        </div>
    </div>
  )
}

export default About