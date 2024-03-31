import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@mui/material/TextField";
import { PlansContext } from "./contexts/plans.contexs";

function EditPlanForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { editPlan } = useContext(PlansContext);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editPlan(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default EditPlanForm;