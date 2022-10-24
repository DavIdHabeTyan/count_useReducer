import React, {useReducer} from 'react';
import "./count.css"

const ACTIONS = {
   DECREMENT: "decrement",
   INCREMENT: "increment",
}

function reducer(state, action) {
   switch (action.type) {
      case ACTIONS.DECREMENT:
         return ({count: state.count - 1});

      case ACTIONS.INCREMENT:
         return ({count: state.count + 1});
      default:
         return state;
   }
}

const CountUserReducer = () => {
   const [state, dispatch] = useReducer(reducer, {count: 0})

   function handleDecrement() {
      dispatch({type: "decrement"})
   }

   function handleIncrement() {
      dispatch({type: "increment"})
   }

   return (
      <div>
      <h1>Count</h1>
         <button onClick={handleIncrement}>+</button>

         <span>{state.count}</span>

         <button onClick={handleDecrement}>-</button>


      </div>
   );
};

export default CountUserReducer;