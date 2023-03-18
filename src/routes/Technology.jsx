import React from 'react';
import SectionHeading from '../components/SectionHeading';
import techData from '../json/technolog.json';
import useSwitcher from '../hooks/useSwitcher';
import '../sass/components/_technology.scss';

function Technology() {
  const [currentTech, changeCurrent] = useSwitcher(techData);

  return (
    <div className='technology'>
      <SectionHeading
        className='container'
        title='Space launch 101'
        count='3'
      />
      <div className='wraper'>
        <div className='content'>
          <ol className='links'>
            {techData.map((item) => {
              let classes = `tech-link heading-4 ${
                item.id === currentTech.id ? 'active' : ''
              }`;
              return (
                <li
                  className={classes}
                  key={item.id}
                  onClick={() => changeCurrent(item.id)}
                ></li>
              );
            })}
          </ol>
          <div className='info'>
            <p className='info-title'>the terminology…</p>
            <h3 className='heading-3'>{currentTech.name}</h3>
            <p className='description'>{currentTech.description}</p>
          </div>
        </div>
        <ImageContainer img={currentTech.image} />
      </div>
    </div>
  );
}
function ImageContainer({ img }) {
  return (
    <div className='img-container'>
      <picture>
        <source
          srcSet={require(`../assets/technology/${img.landscape}`)}
          media='(max-width:772px)'
        />
        <source
          srcSet={require(`../assets/technology/${img.portrait}`)}
          media='(min-width:772px)'
        />
        <img
          src={require(`../assets/technology/${img.portrait}`)}
          alt='machine '
        />
      </picture>
    </div>
  );
}

export default Technology;
