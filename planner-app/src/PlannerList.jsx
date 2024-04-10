import React, { useContext } from "react";
import PlannerForm from "./PlannerForm";
import Plan from "./Plan";
import { DispatchContext, PlansContext } from "./contexts/plans.contexts";
import SortableList, { SortableItem } from "react-easy-sort";
import { arrayMoveImmutable } from "array-move";
import "./PlannerList.css";

const PlannerList = () => {
  const dispatch = useContext(DispatchContext);
  const plans = useContext(PlansContext);

  const onSortEnd = (oldIndex, newIndex) => {
    dispatch({
      type: "SORT",
      payload: arrayMoveImmutable(plans, oldIndex, newIndex),
    });
  };

  if (plans.length)
    return (
      <div className="PlannerList">
        <h1>
          Get Things Done!
          <span>Planner app with custom hooks, context and reducer.</span>
        </h1>
        <SortableList onSortEnd={onSortEnd} draggedItemClassName="dragged">
          <div className="plan-list">
            {plans.map((plan, i) => (
              <div className="plan" key={plan.id}>
                <SortableItem index={i} key={plan.id}>
                  <ul>
                    <Plan {...plan} />
                  </ul>
                </SortableItem>
              </div>
            ))}
          </div>
        </SortableList>
        <PlannerForm />
      </div>
    );
  return null;
};

export default PlannerList;
