import { Link, Route, Routes } from "react-router-dom";
// import { useState } from 'react';
import "./Layout.css";
import { Blog } from "../../pages/Blog";
import { Home } from "../../pages/Home";
import Journals from "../../pages/Publication";
import Responsibilities from "../../pages/Responsibilities";
import Conferences from "../../pages/Seminars";
// import logo from './logo.svg';

const Navbar = () => {
  return (
    <>
      <nav class="home-nav">
        <div class="navbar-top">
          <div class="navbar-menu-left">
            <ul class="nav-top-left">
              <li>
                <Link to="/" class="home-nav">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/blog" class="home-nav">
                  BLOG
                </Link>
              </li>
              <li>
                <Link to="/contact" class="home-nav">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/gallery" class="home-nav">
                  GALLERY
                </Link>
              </li>
            </ul>
          </div>
          <div class="navbar-menu-right">
            <ul class="nav-top-right">
              <li>
                <Link to="/publication" class="home-nav">
                  PUBLICATIONS
                </Link>
              </li>
              <li>
                <Link to="/responsibilities" class="home-nav">
                  RESPONSIBILITIES
                </Link>
              </li>
              <li>
                <Link to="/seminars" class="home-nav">
                  SEMINARS
                </Link>
              </li>
              <li>
                <Link to="/gallery" class="home-nav">
                  RESUME
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/publication" element={<Journals />} />
        <Route path="/responsibilities" element={<Responsibilities />} />
        <Route path="/seminars" element={<Conferences />} />
      </Routes>
    </>
  );
};

export default Navbar;
