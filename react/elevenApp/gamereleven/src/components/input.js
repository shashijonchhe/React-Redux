import React from 'react'


const Input = (props) => {
	return(
			<input 
			type="text" 
	  		placeholder="Enterlist" 
	  		onChange={props.onHandleChange} />
		)
}


export default Input;

