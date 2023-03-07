import React from 'react';
import { NavLink, useParams, Navigate } from 'react-router-dom';
import destinationsData from '../json/destinations.json';
import '../sass/components/_destination.scss';

export default function Destination() {
  const { planet } = useParams();
  const current = destinationsData.find((item) => item.title === planet);

  if (current === undefined) {
    return <Navigate to={destinationsData[0].title} />;
  }
  return (
    <section className='destination '>
      <div className='container'>
        <h5 className='heading-5'>Pick your destination</h5>
        <div className='content'>
          <PlanetImg title={current.title} />
          <div>
            <Links titles={destinationsData.map((e) => e.title)} />
            <Info title={current.title} description={current.description} />
            <Details time={current.travel_time} distance={current.distance} />
          </div>
        </div>
      </div>
    </section>
  );
}
function PlanetImg({ title }) {
  return (
    <>
      <div className='img-container'>
        <picture>
          <source
            srcSet={require(`../assets/destination/image-${title}.webp`)}
            type='image/webp'
          />
          <source
            srcSet={require(`../assets/destination/image-${title}.png`)}
            type='image/png'
          />
          <img
            src={require(`../assets/destination/image-${title}.png`)}
            alt={`The ${title} `}
            loading='lazy'
          />
        </picture>
      </div>
    </>
  );
}

function Links({ titles }) {
  return (
    <ul className='planet-links'>
      {titles.map((title) => (
        <li className='sub-h2' key={title}>
          <NavLink className='planet-link' to={`/destination/${title}`}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
function Info({ title, description }) {
  return (
    <div className='planet-info'>
      <h2 className='planet-title heading-2'>{title}</h2>
      <p className='planet-description'>{description}</p>
    </div>
  );
}
function Details({ distance, time }) {
  return (
    <div className='planet-details'>
      <div className='box'>
        <span className='sub-h2'>avg. distance</span>
        <span className='sub-h1'>{distance} km</span>
      </div>
      <div className='box'>
        <span className='sub-h2'>Est. travel time</span>
        <span className='sub-h1'>{formatDuration(time)}</span>
      </div>
    </div>
  );
}

function formatDuration(duration) {
  let formattedDuration = duration,
    units = [
      { name: 'year', duration: 365 },
      { name: 'month', duration: 30 },
      { name: 'day', duration: 1 },
    ];
  let unitName = '';
  for (let i = 0; i < units.length; i++) {
    const unit = units[i];
    if (duration >= unit.duration) {
      formattedDuration = (duration / unit.duration)
        .toFixed(1)
        .replace(/\.?0*$/, '');
      unitName = unit.name;
      break;
    }
  }
  if (formattedDuration !== 1) {
    unitName += 's';
  }

  return `${formattedDuration}  ${unitName}`;
}
