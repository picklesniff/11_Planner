import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer.jsx";
import plansReducer from "../reducer/plans.reducer.jsx";
import { v4 as uuidv4 } from "uuid";

const defaultPlans = [
  {
    id: uuidv4(),
    task: "Obsidian Review/Update from 8 to 8:30am",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "Team Notion Review/Update from 8:30 to 9am ",
    completed: false,
  },
  {
    id: uuidv4(),
    task: "Run through the emails from 9am to 10:30am",
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
