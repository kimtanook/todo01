import { useState } from 'react';
import '../../css/style.css';

const Form = ({ toDos, setToDos }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeBody = (event) => setBody(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === '' || body === '') {
      return;
    }
    setToDos((currentToDos) => [
      { id: Date.now(), title: title, body: body, isDone: false },
      ...currentToDos,
    ]);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        onChange={onChangeTitle}
        value={title}
        type="text"
        placeholder="title"
        minLength={2}
      />
      <input
        onChange={onChangeBody}
        value={body}
        type="text"
        placeholder="body"
        minLength={2}
      />
      <button>Add To Do</button>
    </form>
  );
};

export default Form;
