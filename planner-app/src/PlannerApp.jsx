import React from "react";
import PlannerList from "./PlannerList";
import PlannerForm from "./PlannerForm";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { PlansProvider } from "./contexts/plans.contexs";

function PlannerApp() {

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
          <Typography color='inherit'>PLANS TRACKER ...with hooks 🤜🏽</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <PlansProvider >
          <PlannerForm />
          <PlannerList />
          </PlansProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default PlannerApp;