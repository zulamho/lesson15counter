import React from "react"; // импортируем библиотек  React
import ReactDOM from "react-dom"; // импортируем библиотек  React-dom
import App from "./App"; // импортируем компонент App
import { createStore } from "redux"; // создание ветки со сторами
import { Provider } from "react-redux"; //доступ к store

const initialState = {
  // данныe
  counter: 0,
};

const reducer = (state = initialState, action) => {
  //принимаем стайт с данными  numberState
  switch (
    action.type // если тип данных будет "increment"
  ) {
    case "counter/increment": //если тип данных будет то
      return { ...state, counter: state.counter + 1 }; //то возвращать
    case "counter/decrement": //если тип данных будет то
      return { ...state, counter: state.counter - 1 }; //то возвращать
    case "counter/reset":
      return { ...state, counter: (state.counter = 0) };
    case "counter/rondom":
      return { ...state, counter: (state.counter + action.payload.rand) };
    default:
      // иначе возвращать
      return state; // изначальные данные стайт
  }
};

const store =
  createStore(reducer); /*хранить - созданную ветку с reducer(c данными)*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
