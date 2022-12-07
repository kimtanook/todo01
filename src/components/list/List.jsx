import React from 'react';
import '../../css/style.css';

const List = ({ toDos, setToDos }) => {
  const confirmToDo = (event) => {
    const confirmToDos = toDos.map((item) => {
      if (item.id == event.target.parentElement.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return { ...item };
      }
    });
    setToDos(confirmToDos);
  };

  const deleteToDo = (event) => {
    const deleteToDos = toDos.filter(
      (item) => item.id !== parseInt(event.target.parentElement.id)
    );
    setToDos(deleteToDos);
  };
  return (
    <div className="todo-list-container">
      <hr />
      <div>To Do List</div>
      <div className="todo-list">
        <div className="todo-container">
          {toDos.map((item) => {
            if (item.isDone == false) {
              return (
                <div className="todo-item" id={item.id} key={item.id}>
                  제목
                  <div className="item-title">{item.title}</div>
                  내용
                  <div className="item-body">{item.body}</div>
                  <button onClick={confirmToDo}>
                    {!item.isDone ? '확인' : '취소'}
                  </button>
                  <button onClick={deleteToDo}>삭제</button>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>Confirm List</div>
      <div className="confirm-list">
        <div className="confirm-container">
          {toDos.map((item) => {
            if (item.isDone == true) {
              return (
                <div className="confirm-item" id={item.id} key={item.id}>
                  제목<div className="item-title">{item.title}</div>
                  내용<div className="item-body">{item.body}</div>
                  <button onClick={confirmToDo}>
                    {!item.isDone ? '확인' : '취소'}
                  </button>
                  <button onClick={deleteToDo}>삭제</button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default List;
