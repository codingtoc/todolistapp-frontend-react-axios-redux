// 리덕스 액션 타입 가져오기
import { FETCH_TODOLIST } from "./ActionTypes";

// 할일 목록 상태 변경 관련 리덕스 액션 생성자
export const fetchTodoList = todos => {
  return {
    type: FETCH_TODOLIST,
    todos
  };
};
