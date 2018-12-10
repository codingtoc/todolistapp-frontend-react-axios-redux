// 리덕스 액션 타입 가져오기
import { FETCH_TODOLIST } from "../actions/ActionTypes";

// 초기 상태값 정의
const initialState = {
  todos: []
};

// 루트 리듀서 정의
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOLIST:
      // 액션으로 전달된 할일 목록으로 상태 변경
      return { ...state, todos: action.todos };
    default:
      return state;
  }
};

export default rootReducer;
