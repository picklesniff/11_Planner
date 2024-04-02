import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer.jsx";
import plansReducer from "../reducer/plans.reducer.jsx";
import { v4 as uuidv4 } from "uuid";

const defaultPlans = [
  { id: uuidv4(), task: "Notion Review/Update from 8 to 9", completed: false },
  {
    id: uuidv4(),
    task: "Run through the emails from 9 to 10",
    completed: false,
  },
  { id: uuidv4(), task: "Update Obsidian", completed: false },
];

export const PlansContext = createContext();
export const DispatchContext = createContext();

export function PlansProvider({ children }) {
  const [plans, dispatch] = useLocalStorageReducer("plans", defaultPlans, plansReducer);
  return (
    <PlansContext.Provider value={ plans }>
      <DispatchContext.Provider value={ dispatch }> 
      {children}
      </DispatchContext.Provider>
    </PlansContext.Provider>
  );
}
