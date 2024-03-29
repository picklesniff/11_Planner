import React, { useState, useEffect} from "react";
import PlannerList from "./PlannerList";
import PlannerForm from "./PlannerForm";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';

function PlannerApp() {
    const storedPlans = JSON.parse(window.localStorage.getItem("plans"));
  
    const initialPlans = storedPlans ? storedPlans : [
      { id: uuidv4(), task: "Notion Review/Update from 8 to 9", completed: false },
      { id: uuidv4(), task: "Run through the emails from 9 to 10", completed: false },
      { id: uuidv4(), task: "Update Obsidian", completed: false },
    ];
  const [plans, setPlans] = useState(initialPlans);

  useEffect(() => {
    window.localStorage.setItem("plans", JSON.stringify(plans));
  }, [plans]);
  //rerender only whn plans upd

  const addPlan = newPlanText => {
    setPlans([...plans, {id: uuidv4(), task: newPlanText, completed: false}])
  }
const removePlan = planId => {
    const updatedPlans = plans.filter(plan => plan.id !== planId);
    setPlans(updatedPlans)
}
const togglePlan = planId => {
    const updatedPlans = plans.map(plan =>
      plan.id === planId ? { ...plan, completed: !plan.completed } : plan
    );
    setPlans(updatedPlans);
  }
  const editPlan = (planId, newTask) => {
    const updatedPlans = plans.map(plan =>
      plan.id === planId ? { ...plan, task: newTask } : plan
    );
    setPlans(updatedPlans);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>PLANS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <PlannerForm addPlan={addPlan} />
          <PlannerList
            plans={plans}
            removePlan={removePlan}
            togglePlan={togglePlan}
            editPlan={editPlan}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PlannerApp;