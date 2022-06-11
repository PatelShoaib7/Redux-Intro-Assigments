

import initialstate from "./store"

import { counter_inc , counter_dec } from "./action.type";

export const reducer =(state , action)=>{
  console.log(state , action)

  switch(action.type)
  {
      case counter_inc:{
          state.count++;
          return {...state}
      }
      case counter_dec:{
          state.count--
          return {...state}
      }
      default :
      {
          return state
      }
  }

   
}