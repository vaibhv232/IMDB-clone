import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <NavLink className='link' to='/'><img className='header-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' /> </NavLink>
                <NavLink className='link' to='/movies/popular'><span>Popular</span> </NavLink>
                <NavLink className='link' to="/movies/top_rated"><span>Top Rated</span></NavLink>
                <NavLink className='link' to="/movies/upcoming"><span>Upcoming</span></NavLink>
            </div>
            <div className='header-right'>
                <i className="fi fi-sr-user header-profile"></i>
            </div>


        </div>
    )
}

export default Header