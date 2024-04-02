import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: false }];
    case "REMOVE":
      return state.filter(plan => plan.id !== action.id);
    case "TOGGLE":
      return state.map(plan =>
        plan.id === action.id ? { ...plan, completed: !plan.completed } : plan
      );
    case "EDIT":
      return state.map(plan =>
        plan.id === action.id ? { ...plan, task: action.newTask } : plan
      );
    default:
      return state;
  }
};
export default reducer;