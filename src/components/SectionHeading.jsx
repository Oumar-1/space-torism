import React from 'react';

export default function Heading({ title, count = 1, ...props }) {
  return (
    <h5
      {...props}
      className={`${props.className || ''} section-heading heading-5 `}
      style={{ '--section-count': `"${count}"` }}
    >
      {title}
    </h5>
  );
}
