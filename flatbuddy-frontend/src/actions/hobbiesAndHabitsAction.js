import { ON_HABITS_CHANGE,  
  ON_BUDGET_CHANGE, 
  ON_LOCATION_CHANGE, 
  ON_HOBBIES_CHANGE,
  ON_SUBMIT,
  ON_USER_LOGIN,
  ON_GET_RESULT
 } from "./types";
import axios from "../utils/axios";

export const onHabitsChange = (newHabits) =>{
  return {
    type:ON_HABITS_CHANGE,
    payload:newHabits
  };
};
export const onHobbiesChange = (newHobbies) =>{
  return {
    type:ON_HOBBIES_CHANGE,
    payload:newHobbies
  }
};
export const loggedInUser = initialState =>async dispatch=> {
  console.log(initialState)
 dispatch ({
     type:ON_USER_LOGIN,
     payload:initialState
 }
 )
}
export const onLocationChange = (address) => {
  return {
    type: ON_LOCATION_CHANGE,
    payload: address
  };
};
export const onBudgetChange = (budgetObject) => {
  return {
    type: ON_BUDGET_CHANGE,
    payload: budgetObject
  };
};

export const getResults = payload => async dispatch => {
  
  console.log("enter")
    fetch(`http://localhost:8080/users/${payload.id}/result`)
    .then(response => response.json())
    .then( data =>  {
      console.log(data)
      dispatch( {
    type:ON_GET_RESULT,
    payload:data
  })
    
  }).catch((error)=>{
  
    })
  }
  export const getResultsUpdate = payload => async dispatch => {
  
    console.log("enter")
      fetch(`http://localhost:8080/users/${payload.id}/result?budgetMin=${payload.state.budgetMin}&budgetMax=${payload.state.budgetMax}&location=${payload.state.location}`)
      .then(response => response.json())
      .then( data =>  {
        console.log(data)
        dispatch( {
      type:ON_GET_RESULT,
      payload:data
    })
      
    }).catch((error)=>{
    
      })
    }


export const onSubmit = payload => async dispatch=>{

 
  const requestOptions = {
       
    method:"POST",
    headers:{'Content-Type':'application/json','Access-Control-Allow-Origin': 'http://localhost:3000'},
    body:JSON.stringify(payload.state)
}
console.log(payload)
  fetch(`http://localhost:8080/users/${payload.id}/submitDetails`,requestOptions)
  .then(response => response.json())
  .then(async data =>  {

     console.log(data)
      
  
      

  }).catch((error)=>{

  })
 
 
};