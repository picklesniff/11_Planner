import React from "react";
import Plan from "./Plan";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

function PlannerList({ plans, removePlan, togglePlan, editPlan }) {
  if (plans.length)
    return (
      <Paper>
        <List>
          {plans.map((plan, i) => (
            <React.Fragment key={i}>
              <Plan
                {...plan}
                key={plan.id}
                removePlan={removePlan}
                togglePlan={togglePlan}
                editPlan={editPlan}
              />
              {i < plans.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
export default PlannerList;