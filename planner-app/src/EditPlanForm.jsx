import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/plans.contexts";
import "./EditPlanForm.css";

function EditPlanForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  return (
    <div className="Plan-edit-form" >
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
    >
      <input value={value} onChange={handleChange} />
      <button>Save</button>
    </form>
    </div>
  );
}
export default EditPlanForm;
