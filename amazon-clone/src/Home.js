import React from 'react';
import "./Home.css"
import Product from "./Product";

function Home(props) {
    return (
        <div className='Home'>
            <div className="home__container">
                <img className='home__image' src="https://m.media-amazon.com/images/I/719oukAB5zL._SX3000_.jpg"
                     alt="Background Image"/>
            </div>

            <div className="home__row">
                <Product id='1' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/41+ZsplOPWL._SY445_SX342_.jpg' rating={4}/>
                <Product id='2' title='Daily Probiotics' price={39.99} image='https://m.media-amazon.com/images/I/41hc23RvaEL._MCnd_AC_.jpg' rating={5}/>
            </div>

            <div className="home__row">
                <Product id='3' title='Ring Doorbell' price={119.99} image='https://m.media-amazon.com/images/I/317AG2X1llL._MCnd_AC_.jpg' rating={5}/>
                <Product id='4' title='The lean startup' price={9.99} image='https://m.media-amazon.com/images/I/41+ZsplOPWL._SY445_SX342_.jpg' rating={5}/>
                <Product id='5' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/41+ZsplOPWL._SY445_SX342_.jpg' rating={4}/>
            </div>

            <div className="home__row">
                <Product id='6' title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/41+ZsplOPWL._SY445_SX342_.jpg' rating={5}/>

            </div>
        </div>
    );
}

export default Home;