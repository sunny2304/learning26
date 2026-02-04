import React from 'react'
import { NetflixHome } from './NetflixHome'
import { NetflixShows } from './NetflixShows'
import "../assets/css/img.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navimg">
          <Link to="/"><img src="nflx.png" alt="" srcset="" height={50} width={80} /></Link>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/movies">Movies</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/shows">Shows</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/anime">Anime</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/popular">New & Popular</Link>
            </li>
          </ul>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}
