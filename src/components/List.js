import React from "react";

// 함수형 컴포넌트
const List = ({ todos, deleteTodo, doneToggle }) => {
  const todoList = todos.length ? (
    // 할일 목록이 존재하는 경우
    todos.map(todo => {
      // 할일 완료여부에 따라 클래스 이름 설정
      let checked = todo.done ? "checked grey-text" : "";
      return (
        <div
          className={"collection-item"}
          key={todo._id}
          onClick={e => {
            doneToggle(todo._id);
            checked = todo.done ? "" : "checked grey-text";
          }}
        >
          <span className={checked}>{todo.todo}</span>
          <span
            className="right"
            onClick={e => {
              e.stopPropagation();
              deleteTodo(todo._id);
            }}
          >
            X
          </span>
        </div>
      );
    })
  ) : (
    // 할일 목록이 존재하지 않는 경우
    <p className="cneter">You have no todo's left, yay!</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default List;
