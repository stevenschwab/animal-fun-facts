import { animals } from './animals';
import React from 'react';
import * as ReactDOM from 'react-dom';

const title = '';

const background = <img className="background" alt="ocean" src="/images/ocean.jpg"/>

function displayFact(e) {
  const optionIndex = Math.floor(Math.random() * animals[e.target.alt].facts.length);
  const funFact = animals[e.target.alt].facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

const showBackground = true;

const images = [];

for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

const animalFacts = (
  <div>
    <h1>
    { title || 'Click an animal for a fun fact' }
    </h1>;
    {showBackground && background}
    <div className="animals">
      {images}
    </div>
    <p id="fact"></p>
  </div>
)

ReactDOM.render(animalFacts, document.getElementById('root'));