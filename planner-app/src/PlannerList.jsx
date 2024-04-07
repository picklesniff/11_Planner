import React, { useContext, useRef } from "react";
import PlannerForm from "./PlannerForm";
import Plan from "./Plan";
import { PlansContext } from "./contexts/plans.contexts";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./PlannerList.css";

function PlannerList() {
const plans = useContext(PlansContext);
const nodeRef = useRef(null);
  if (plans.length)
    return (
        <div className="PlannerList">
          <h1>
            Get Things Done! <span>Planner app with custom hooks, context and reducer.</span>
          </h1>
          <TransitionGroup className="plan-list" >
            {plans.map((plan) => (
              <CSSTransition key={plan.id} timeout={500} classNames="plan" nodeRef={nodeRef}>
                <ul ref={nodeRef} >
                  <Plan {...plan} />
                </ul>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <PlannerForm />
        </div>
      );
  return null;
}
export default PlannerList;
