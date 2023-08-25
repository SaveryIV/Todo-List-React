/* eslint-disable react/no-array-index-key */
import TodoItem from './TodoItem';

const itemProp = [{
  title: 'Clean',
  completition: false,
},
{
  title: 'Wash',
  completition: false,
},
{
  title: 'Study',
  completition: false,
},
{
  title: 'Work',
  completition: false,
}];
// aaaa
function TodoList() {
  return (
    <>
      {itemProp.map((task, index) => (<TodoItem key={index} itemProp={task} />))}
    </>
  );
}

export default TodoList;
