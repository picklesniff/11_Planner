import React, { useContext } from "react";
import Plan from "./Plan";
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { PlansContext } from "./contexts/plans.contexs";

function PlannerList() {
  const plans = useContext(PlansContext)
  if (plans.length)
    return (
      <Paper>
        <List>
          {plans.map((plan, i) => (
            <React.Fragment key={i}>
              <Plan
                {...plan}
                key={plan.id}
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