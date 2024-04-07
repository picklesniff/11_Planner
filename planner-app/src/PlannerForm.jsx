import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/plans.contexts";
import "./PlannerForm.css";

function PlannerForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <form
      className="NewPlanForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "ADD", task: value });
        reset();
      }}
    >
      <label htmlFor="newTask">Add New Task</label>
      <input
        type="text"
        id="newTask"
        placeholder="New Task"
        name="task"
        value={value}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
export default PlannerForm;
