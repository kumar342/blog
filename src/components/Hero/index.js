import React from 'react';
import "./style.css";
import Card from '../UI/Card';
import Logo from '../logo';
import Navbar from '../navbar';

export default function Hero() {
    return (
        <div>
           <Card >
              <div style={{padding: '50px 0'}}>
                 <Logo />
              </div>
                 <Navbar />
           </Card> 
        </div>
    )   
}
