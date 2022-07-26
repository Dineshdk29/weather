import { createStore } from "redux"

const First_Redux ='first'
const Second_Redux ='second'
const THIRD ='third'


// //actions 
export const oneAction = () =>({type: First_Redux})
export const twoAction = () =>({type: Second_Redux})
export const thirdAction = () => ({type: THIRD})

//reducers

const reducers = (state,action) =>{
  if(action.type === First_Redux){
     return state = "OOTY is Chill"
  }else if(action.type === Second_Redux){
    return state = "CHENNAI is Hot"
  }else if(action.type === THIRD){
    return state = "SALEM is Rainy"
  }else{
    return state = "nothing here"
  }
}

//store
export const store = createStore(reducers);

// dispatch

store.dispatch(oneAction())
store.dispatch(twoAction())
store.dispatch(thirdAction())