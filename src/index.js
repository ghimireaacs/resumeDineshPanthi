import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Layout';
import reportWebVitals from './reportWebVitals';
import Intro from './components/Intro'
import Profile from './components/Profile';
import Academics from './components/Academic';
import Education from './components/Education';
import Honors from './components/Honor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    
    <div className='profileIntro'>
      <div className='profileIndex'>
        <Profile />
      </div>
      <Profile />
      <Intro />
      <Academics />
    </div>
    <Academics />
    <Education />
    <Honors />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
