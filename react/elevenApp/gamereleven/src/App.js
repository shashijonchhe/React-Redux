import { connect } from 'react-redux';
import React, {Component} from 'react';
import Input from './components/input';
import Button from './components/button';

class App extends Component{
  // constructor(){
  //   super()

  //   this.inputRef=React.createRef()
  // }
render(){
  return(
<div>
  <Input onHandleChange={this.props.onHandleChange}/>
<br/>
  <Button onHandleClick={this.props.onHandleClick}/>
<br/>  
<ol>
  {this.props.list.map((ListItem, index)=>{
return(
  <li>{ListItem} <button onClick={this.props.onHandleDelete.bind(this,index)}>delete</button></li>
    )})}
</ol> 
</div>

)
}
}

const mapStateToProps = (state)=>{
  return {
    str: state.str,
    list: state.list
  }
};

const mapDispatchToProps = (dispatch)=>{
  return{

    onHandleChange:(e)=> dispatch({type:'inputChange', val: e.target.value}),
    onHandleClick:()=>dispatch({type:'addItem'}),
    onHandleDelete:(id)=>dispatch({type: 'deleteItem', val: id})
    
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(App);