import React from 'react';
import '../sass/components/_home.scss';

function Home() {
  return (
    <section className='home container'>
      <div className='content'>
        <h5 className='heading-5'>so, you want to travel to</h5>
        <h1 className='heading-1'>Space</h1>
        <p className='info body-text'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className='explore-btn heading-5'>explore</button>
    </section>
  );
}

export default Home;
