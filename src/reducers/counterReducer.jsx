import { ADD_COUNTER } from './actions';

const counterReducer = (state = 0, action) => {
   let newState;
   switch(action.type) {
       case ADD_COUNTER:
           return newState = state + action.payload;
   
       
    default: 
        return state
   }
    
};