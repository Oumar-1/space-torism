import { useState } from 'react';
import { string as str, array as arr, object as obj } from 'yup';

function Switcher(data) {
  const dataSchema = arr()
    .defined('data must be defined')
    .min(1, 'at least 1 object must pass')
    .of(
      obj().shape({
        id: str().required('each data must contain "id"'),
      })
    );

  dataSchema.validateSync(data);
  const [currentView, setCurrentView] = useState(data[0]);
  function changeView(id) {
    if (id === currentView.id) return;
    setCurrentView(data.find((item) => item.id === id));
  }
  return [currentView, changeView];
}

export default Switcher;
