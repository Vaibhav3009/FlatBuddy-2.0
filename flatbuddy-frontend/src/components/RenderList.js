import React, { Component } from 'react'
import {connect} from 'react-redux'
import ResultReducer from '../reducers/ResultReducer'
import { getResults } from '../actions/hobbiesAndHabitsAction'
import { bindActionCreators } from 'redux'
import { onBudgetChange,onLocationChange } from '../actions/hobbiesAndHabitsAction'
class RenderList extends Component {

    constructor(props){
        super(props)
}





  


    
   
    render() {
        const {results} = this.props
        
        console.log(this.props.hobbiesAndHabits)
        return (
            <div>
            {results.map((result,index)=>{
                return (
                    
                    <div key={index}>
                <div style={{margin:'5%'}} className="card">
  <div className="card-header">
    {result.username}
  </div>
  <div className="card-body">
    <h5 className="card-title">Name: {result.name}</h5>
    <p className="card-text">Contact: {result.email}</p>
    <p className="card-text">Location: {result.location}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>

                )
            })}
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        results:state.results,
        hobbiesAndHabits:state.hobbiesAndHabits
    }
    
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
       getResults,onBudgetChange,onLocationChange
    },dispatch)
       
}

export default connect(mapStateToProps,mapDispatchToProps)(RenderList)
