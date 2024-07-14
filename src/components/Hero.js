import React from 'react';
import './Hero.css';

const Hero = ({ onEdit}) => {
  return (
    <section className="hero">
      <div class="container">
      
        <div class="button-section">
          <button class="button">Done</button>
          <button class="button">Done</button>
          <button class="button">Done</button>
        </div>
        <div class="checkbox-section">
          <div class="check">
            <input type="checkbox" id="check1" />
          </div>
          <div class="check">
            <input type="checkbox" id="check2" />
          </div>
          <div class="check">
            <input type="checkbox" id="check3" />
          </div>
          <div class="check">
            <input type="checkbox" id="check4" />
          </div>
          <div class="check">
            <input type="checkbox" id="check5" />
          </div>
          <div class="check">
            <input type="checkbox" id="check6" />
          </div>
          <div class="check">
            <input type="checkbox" id="check7" />
          </div>
          <div class="check">
            <input type="checkbox" id="check8" />
          </div>
        </div>
        <div class="home-section">
          <div class="item">
            <label for="item1">All pages</label>
            <input type="checkbox" id="item1" />
          </div>
          <div class="item">
            <label for="item2"> All pages </label>
            <input type="checkbox" id="item2" />
          </div>
          <div class="item">
            <label for="item3">All pages</label>
            <input type="checkbox" id="item3" />
          </div>
          <div class="item">
            <label for="item4">All pages</label>
            <input type="checkbox" id="item4" />
          </div>
          <div class="item">
            <label for="item5">All pages</label>
            <input type="checkbox" id="item5" />
          </div>
          <div class="item">
            <label for="item6">All pages</label>
            <input type="checkbox" id="item6" />
          </div>
          <div class="item">
            <label for="item7">All pages</label>
            <input type="checkbox" id="item7" />
          </div>
          <div class="item">
            <label for="item8">All pages</label>
            <input type="checkbox" id="item8" />
          </div>
        </div>
        <div className="outer-frame">
          <div className="frame-section">
            
            <div className="frame">
              <label htmlFor="frame1">All pages</label>
              <input type="checkbox" id="frame1" />
            </div>
            <div className="frame">
              <label htmlFor="frame2">Page 1</label>
              <input type="checkbox" id="frame2" />
            </div>
            <div className="frame">
              <label htmlFor="frame3">Page 2</label>
              <input type="checkbox" id="frame3" />
            </div>
            <div className="frame">
              <label htmlFor="frame4">Page 3</label>
              <input type="checkbox" id="frame4" />
            </div>
            <div className="frame">
              <label htmlFor="frame5">Page 4</label>
              <input type="checkbox" id="frame5" />
            </div>
            <div className="frame">
              <button className="button">Done</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
};

export default Hero;
