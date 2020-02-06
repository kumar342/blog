import React from 'react';
import "./style.css"

export default function Header() {
    return (
        <header className="header">
          <nav className="headerMenu">
             <a href="#">Home</a>
             <a href="#">About us</a>
             <a href="#">Contact us</a>
          </nav>

           <div> Social Media Links</div>
        </header>
    )
}
