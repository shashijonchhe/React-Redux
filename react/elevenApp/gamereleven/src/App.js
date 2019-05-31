import { connect } from 'react-redux';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super()

    this.inputRef=React.createRef()
  }
render(){
  return(
<div>
  <input type="text" 
  placeholder="Enterlist" 
  //onChange={this.props.onHandleChange}/>
  ref={this.inputRef}/>
<br/>
  <button onClick={this.props.onHandleClick.bind(this,this.inputRef)}>add</button>
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

    //onHandleChange:(e)=> dispatch({type:'inputChange', val: e.target.value}),
    onHandleClick:(val)=>dispatch({type:'addItem', val: val}),
    onHandleDelete:(id)=>dispatch({type: 'deleteItem', val: id})
    
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(App);