import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import RouterNew from './Router'
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from 'redux-promise';
async function fetchingData(){
  return new Promise((resolve,reject)=>{
  fetch("http://localhost:4000/bookDetails")
        .then(response => response.json())
        .then(data => {
            //sorting according to startTime decenting order larger time first 
            data.sort(function (a, b) { return (a.startTime < b.startTime) ? -1 : ((b.startTime < a.startTime) ? 1 : 0) })
            resolve(data)
            
        })
})
}
//action creator
export const addItem = async () => {
  return {
    type: "ADD_ITEM",
    item: await fetchingData()
  };
};

export const addDate =  (date) => {
  return {
    type: "ADD_DATE",
    item: new Date(date)
  };
};

//reducer
const reducer = (state ={data:[]}, action) => {
  console.log(action.type)
  switch (action.type) {
    case "ADD_ITEM":
      return {data:action.item,today:new Date()}
      case "ADD_DATE":
      return {...state,today:action.item}
    default:
      return state;
  }
};

//store
export const store = createStore(
  reducer,
  applyMiddleware(promiseMiddleware)
 );




ReactDOM.render(<Provider store={store}> <RouterNew/> </Provider>, 
    document.getElementById('root'));

