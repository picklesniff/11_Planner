import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer.jsx";
import plansReducer from "../reducer/plans.reducer.jsx";
import { v4 as uuidv4 } from "uuid";

const defaultPlans = [
  {
    id: uuidv4(),
    task: "Add a new task",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "Now you can edit it, mark as done or delete it",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "Drag-n-drop tasks to reorganize them in the right order",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "All the tasks and updates are saved to the local storage",
    completed: false,
  },
];

export const PlansContext = createContext();
export const DispatchContext = createContext();

export function PlansProvider({ children }) {
  const [plans, dispatch] = useLocalStorageReducer(
    "plans",
    defaultPlans,
    plansReducer
  );
  return (
    <PlansContext.Provider value={plans}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </PlansContext.Provider>
  );
}
