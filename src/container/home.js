import React,{Component} from 'react';
import {connect} from 'react-redux';
import {courseList} from '../action/actionFile';
import Display from '../component/home/latestDisplay'
import {BrowserRouter, Route} from 'react-router-dom';
import Form from '../component/home/form'
class Home extends Component{
  
     componentDidMount(){
        this.props.dispatch(courseList())

     }
     render(){
      return(
         <div>
             <BrowserRouter>
             <Route  exact path="/form" component={Form}/>  
             </BrowserRouter>
            <Display ldata={this.props.dataList.courseList}/>
         </div>
      )
     }
}

function mapStateToProps(state){
  
     return{
        dataList:state.course
     }
}

export default connect(mapStateToProps)(Home)