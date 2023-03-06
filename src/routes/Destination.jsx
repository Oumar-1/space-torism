import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import destinationsData from '../json/destinations.json';
import '../sass/components/_destination.scss';

export default function Destination(props) {
  const { planet } = useParams();
  const current =
    destinationsData.find((item) => item.name === planet) ||
    destinationsData[0];

  return (
    <section className='destination '>
      <div className='container'>
        <h5 className='heading-5'>Pick your destination</h5>
        <div className='content'>
          <PlanetImg name={current.name} />
          <div>
            <ul className='planet-links'>
              <Links />
            </ul>
            <div className='planet-info'>
              <h2 className='planet-title heading-2'>{current.name}</h2>
              <p className='planet-description'>{current.description}</p>
            </div>
            <div className='planet-detail'>
              <div className='box'>
                <span className='sub-h2'>avg. distance</span>
                <span className='sub-h1'>{current.distance}km</span>
              </div>
              <div className='box'>
                <span className='sub-h2'>Est. travel time</span>
                <span className='sub-h1'>
                  {formatDuration(current.travel_time)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Links() {
  return destinationsData.map((planet) => (
    <li className='sub-h2' key={planet.name}>
      <NavLink className='planet-link' to={`/destination/${planet.name}`}>
        {planet.name}
      </NavLink>
    </li>
  ));
}
function PlanetImg({ name }) {
  return (
    <>
      <div className='img-container'>
        <picture>
          <source
            srcSet={require(`../assets/destination/image-${name}.webp`)}
            type='image/webp'
          />
          <source
            srcSet={require(`../assets/destination/image-${name}.png`)}
            type='image/png'
          />
          <img
            src={require(`../assets/destination/image-${name}.png`)}
            alt={`The ${name} `}
            loading='lazy'
          />
        </picture>
      </div>
    </>
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
