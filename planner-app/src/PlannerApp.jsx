import React from "react";
import PlannerList from "./PlannerList";
import { PlansProvider } from "./contexts/plans.contexts";
import "./PlannerApp.css";

function PlannerApp() {

  return (
    <div className="custom-paper">
      <PlansProvider>
        <PlannerList />
      </PlansProvider>
    </div>
  );
}

export default PlannerApp;