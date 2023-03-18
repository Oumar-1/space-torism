import React from 'react';
import SectionHeading from '../components/SectionHeading';
import crewData from '../json/crew.json';
import '../sass/components/_crew.scss';
import useSwitcher from '../hooks/useSwitcher';

export default function Crew() {
  const [currentMember, changeMember] = useSwitcher(crewData);
  return (
    <div className='crew'>
      <div className='container'>
        <SectionHeading count={2} title='Meet your crew' />
        <div className='content'>
          <div className='member-info'>
            <MemberInfo {...currentMember} />
            <ul className='bullet-links'>
              {crewData.map((item) => {
                let classes = item.id === currentMember.id && 'active';
                classes += ' bullet-link';

                return (
                  <li
                    className={classes}
                    key={item.id}
                    onClick={() => changeMember(item.id)}
                  ></li>
                );
              })}
            </ul>
          </div>
          <ImgContainer img={currentMember.image} />
        </div>
      </div>
    </div>
  );
}
function MemberInfo({ job_title, name, description }) {
  return (
    <div>
      <h4 className='member-job heading-4'>{job_title}</h4>
      <h3 className='member-name heading-3 crew-member-name'>{name}</h3>
      <p className='crew-member-description'>{description}</p>
    </div>
  );
}
function ImgContainer({ img }) {
  return (
    <div className='img-container'>
      <picture>
        <source srcSet={require(`../assets/crew/${img.webp}`)} type='webp' />
        <source srcSet={require(`../assets/crew/${img.png}`)} type='png' />
        <img src={require(`../assets/crew/${img.png}`)} alt='crew member ' />
      </picture>
    </div>
  );
}
