import React, { createContext } from "react";
import { usePlanState } from "../hooks/usePlanState";
import { v4 as uuidv4 } from 'uuid';

const defaultPlans = [
  { id: uuidv4(), task: "Notion Review/Update from 8 to 9", completed: false },
  { id: uuidv4(), task: "Run through the emails from 9 to 10", completed: false },
  { id: uuidv4(), task: "Update Obsidian", completed: false },
];

export const PlansContext = createContext();

export function PlansProvider({ children }) {
  const plansValues = usePlanState(defaultPlans);
  return (
    <PlansContext.Provider value={plansValues}>
      {children}
    </PlansContext.Provider>
  );
};
