import React,{useEffect,useState} from 'react';
import LeftSideBar from './leftSideBar';
import HobbiesAndHabits from './hobbiesAndHabits';
import { useSelector , useDispatch} from 'react-redux';
import SignOutButton from './SignOut';
import { onSubmit } from '../actions/hobbiesAndHabitsAction';
import userAdd from '../actions/UserAction';
import { getResults } from '../actions/hobbiesAndHabitsAction';
import styles from '../css/dashboard.module.css'
import { withRouter } from 'react-router-dom';
const Dashboard = (props) =>{
  const state = useSelector(state => {console.log(state)
    return(state.hobbiesAndHabits)});
  
  const userState =useSelector(state => state.user)
   
  const results = useSelector(state=>state.results)
  console.log(state)
  const payload = {
    state,id:localStorage.getItem('userId')
  }
  const dispatch = useDispatch();

 

  const getResultPage = async() => {
    console.log("asdasdsadsad")
    
    await dispatch(onSubmit(payload))
    dispatch(getResults(payload))
    
    if(results!=[] && results!=null){
      props.history.push("/results")
    }
  }


  return(
    <div className="container">
      
       <div className='row'>
       <div className={`col-4 text-center ${styles.leftSide}`}>
      
      <LeftSideBar isOnResult={false}/>
      
      </div>
      <div className='col-8'>
      <HobbiesAndHabits/>
      </div>
      </div>
    
      <div style={{textAlign:"center",marginTop:'20px'} }>
        <button className='btn-primary rounded' onClick = {()=>getResultPage()}
        >Submit</button>
      </div>
      <div>
<SignOutButton/>
      </div>
    </div>
  )
}

export default withRouter(Dashboard);