import React from 'react';
import reactDom from 'react-dom';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import App from './App'

//初始化
export const DECREASE_SALARY = 'decrease salary'
export const INCREASE_SALARY = 'increase salary'
const salary = 2000

//定义action
export function increase(salary) {
  return{
    type: INCREASE_SALARY,
    payload:{
      salary
    }
  }
}

export function decrease(salary)  {
  return{
    type: DECREASE_SALARY,
    payload:{
      salary
    }
  }
}

//定义reducer
const reducer = (state= salary,action) =>{
  // console.log(action)
  switch (action.type){
    case 'increase salary':{
      console.log(action.payload.salary)
      return state += action.payload.salary;
    }
    case 'decrease salary':{
      return state -= action.payload.salary;
    }
    default:
      return state
  }
}

//创建store
const store = createStore(reducer);

// store.dispatch(increase)

 console.log(store.getState())

reactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
