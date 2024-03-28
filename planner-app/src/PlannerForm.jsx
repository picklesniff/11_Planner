import React from "react";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from "./hooks/useInputState";

function PlannerForm({ addPlan }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPlan(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Task'
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default PlannerForm;