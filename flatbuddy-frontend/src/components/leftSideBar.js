import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import { BudgetRange } from "../utils/constants";
import { getResults, onBudgetChange,getResultsUpdate} from "../actions/hobbiesAndHabitsAction";
import styles from '../css/leftSideBar.module.css'
const LeftSideBar = (props) =>{
  const dispatch = useDispatch();
  const state = useSelector(state => {console.log(state)
    return(state.hobbiesAndHabits)});
  const onDataChange = async(budgetObject)=>{
    await dispatch(onBudgetChange(budgetObject))

  
      const payload = {
        state,id:localStorage.getItem('userId')
      }
    if(props.isOnResult){
      dispatch(getResultsUpdate(payload))

    }
  }
  return ( 
      <div>
        <Search isOnResult={props.isOnResult} />
        <div>
          <h4>Budget</h4>
         {
           BudgetRange.map((budgetObject, index)=>(
           <div key = {index} onClick={()=>onDataChange(budgetObject) }>
              {budgetObject.text}
           </div>
           ))
         }
        </div>
      </div>
  )
};


export default LeftSideBar;