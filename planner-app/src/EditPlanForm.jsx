import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@mui/material/TextField";

function EditPlanForm({ id, task, editPlan, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
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