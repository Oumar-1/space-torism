import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import crewData from '../json/crew.json';
import '../sass/components/_crew.scss';

export default function Crew() {
  const [currentMember, setCurrentMember] = useState(crewData[0]);
  function changeMember(id) {
    if (id === currentMember.id) return;
    setCurrentMember(crewData.find((item) => item.id === id));
  }
  return (
    <div className='crew'>
      <div className='container'>
        <SectionHeading count={2} title='Meet your crew' />
        <div className='content'>
          <div className='member-info'>
            <div>
              <h4 className='member-job heading-4'>
                {currentMember.job_title}
              </h4>
              <h3 className='member-name heading-3 crew-member-name'>
                {currentMember.name}
              </h3>
              <p className='crew-member-description'>
                {currentMember.description}
              </p>
            </div>
            <ul className='bullet-links'>
              {crewData.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`${
                      item.id === currentMember.id ? 'active' : ''
                    } bullet-link`}
                    onClick={() => changeMember(item.id)}
                  ></li>
                );
              })}
            </ul>
          </div>
          <div className='img-container'>
            <picture>
              <source
                srcSet={require(`../assets/crew/${currentMember.image.webp}`)}
                type='webp'
              />
              <source
                srcSet={require(`../assets/crew/${currentMember.image.png}`)}
                type='png'
              />
              <img
                src={require(`../assets/crew/${currentMember.image.png}`)}
                alt='crew member '
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
