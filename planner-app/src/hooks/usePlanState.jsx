import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialPlans => {
  const [ plans, setPlans ] = useState(initialPlans);
  return {
    plans,
    addPlan: newPlanText => {
      setPlans([...plans, { id: uuidv4(), task: newPlanText, completed: false }]);
    },
    removePlan: planId => {
      const updatedPlans = plans.filter(plan => plan.id !== planId);
      setPlans(updatedPlans);
    },
    togglePlan: planId => {
      const updatedPlans = plans.map(plan =>
        plan.id === planId ? { ...plan, completed: !plan.completed } : plan
      );
      setPlans(updatedPlans);
    },
    editPlan: (planId, newTask) => {
      const updatedPlans = plans.map(plan =>
        plan.id === planId ? { ...plan, task: newTask } : plan
      );
      setPlans(updatedPlans);
    }
  };
};