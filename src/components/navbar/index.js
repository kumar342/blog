import React, {useState} from 'react';
import "./style.css";


export default function Navbar(props) {
    const [search, setSearch]= useState(false)

  const submitSearch = (e) =>{
   e.preventDefault();
   alert('searched')
  }

  const openSearch =() =>{
      setSearch(true);
  }

   const searchClass = search ? 'searchInput active': 'searchInput';



    return (
        <div className="navbar">
          <ul className="navbarMenu">
             <li><a href="#">Home</a></li>
             <li><a href="#">About us</a></li>
             <li><a href="#">Contact us</a></li>
             <li><a href="#">Posts</a></li>
          </ul>
          <div className="search">
            <form onSubmit={submitSearch}>
               <input type="text" className={searchClass} placeholder="Search"/>
               <img onClick={openSearch} className="searchIcon" src={require('../../assetts/Icons/search.png')} alt="Search"/>
            </form>
             
          </div>  
        </div>
    )
}
