import { useState } from 'react';

export default function useToggler(initValue = true) {
  const [isON, setIsOn] = useState(initValue);

  function toggle(val) {
    if (typeof val === 'boolean') setIsOn(val);
    setIsOn((prev) => !prev);
  }

  return [isON, toggle];
}
