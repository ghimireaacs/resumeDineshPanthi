import React from "react";
// import { useState } from 'react';
import "./Layout.css";
// import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav class="home-nav">
      <div class="navbar-top">
        <div class="navbar-menu-left">
          <ul class="nav-top-left">
            <li>
              <a href="/" class="home-nav">
                HOME
              </a>
            </li>
            <li>
              <a href="/blog" class="home-nav">
                BLOG
              </a>
            </li>
            <li>
              <a href="/contact" class="home-nav">
                CONTACT
              </a>
            </li>
            <li>
              <a href="/gallery" class="home-nav">
                GALLERY
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar-menu-right">
          <ul class="nav-top-right">
            <li>
              <a href="/" class="home-nav">
                PUBLICATIONS
              </a>
            </li>
            <li>
              <a href="/blog" class="home-nav">
                RESPONSIBILITIES
              </a>
            </li>
            <li>
              <a href="/contact" class="home-nav">
                SEMINARS
              </a>
            </li>
            <li>
              <a href="/gallery" class="home-nav">
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
