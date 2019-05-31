

const initialState={

	str:"",
	list:[]

}

 const reducer = (state=initialState, action)=>{
 	
 	switch(action.type){
 		// case 'inputChange':
 		// 	return{
 		// 		...state,
 		// 		str: action.val

 			
 		case 'addItem':
 			return{
 				...state,
 				list:[...state.list,action.val.current.value],
 				str:""
 				
 			}
 		case 'deleteItem':
 			return{
 				...state,
 				list: state.list.filter((item,index)=>index!==action.val)
 			}

 		default:
 			return state

 	}
 }

export default reducer;