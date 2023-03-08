import React from 'react';

export default function Heading({ title, count = 1 }) {
  return (
    <h5
      className='section-heading heading-5'
      style={{ '--section-count': `"${count}"` }}
    >
      {title}
    </h5>
  );
}
