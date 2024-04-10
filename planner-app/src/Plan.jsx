import React, { useContext } from "react";
import useToggleState from "./hooks/useToggleState";
import EditPlanForm from "./EditPlanForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DispatchContext } from "./contexts/plans.contexts";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Plan.css";

const Plan = ({ id, task, completed }) => {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);

  return (
    <TransitionGroup >
      <CSSTransition key={id} timeout={500} classNames="plan">
        {isEditing ? (
          <EditPlanForm
            id={id}
            task={task}
            toggleEditForm={toggle}
            className="Plan-edit-form"
          />
        ) : (
          <div className={completed ? "Plan completed" : "Plan"}>
            <FontAwesomeIcon
              className="checkbox"
              icon={completed ? faSquareCheck : faSquare}
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            />
            <span className="Plan-task">{task}</span> {/* Changed li to span */}
            <div className="Plan-buttons">
              <button
                aria-label="Delete"
                onClick={() => dispatch({ type: "REMOVE", id: id })}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button aria-label="Edit" onClick={toggle}>
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Plan;
