import { useState } from 'react';

/* eslint-disable react/prop-types */
function TodoItem({ itemProp }) {
  const [check, setCheck] = useState(false);

  return (
    <li>
      <input type="checkbox" onClick={() => setCheck(!check)} />
      {itemProp.title}
    </li>
  );
}

export default TodoItem;
