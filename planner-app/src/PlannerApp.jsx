import React, { useEffect } from "react";
import PlannerList from "./PlannerList";
import PlannerForm from "./PlannerForm";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { PlansProvider } from "./contexts/plans.contexs";

function PlannerApp() {
useEffect(() => {
  window.localStorage.setItem("plans", JSON.stringify(plans));
}, [plans]);

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
          <PlansProvider >
          <PlannerForm addPlan={addPlan} />
          <PlannerList
            plans={plans}
            removePlan={removePlan}
            togglePlan={togglePlan}
            editPlan={editPlan}
          />
          </PlansProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PlannerApp;