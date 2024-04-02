import React, {useContext} from "react";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/plans.contexs";

function PlannerForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
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