const redux = require('redux');

const initialState = {
  counter: 0
};
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'INCREMENTBY2') {
    return { counter: state.counter + 2 };
  }
  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1 };
  }
  if (action.type === 'DECREMENTBY2') {
    return { counter: state.counter - 2 };
  }
  return state;
};


const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

for (let i = 0; i < 5; i++) {
  store.dispatch({ type: 'INCREMENT' });
}


store.dispatch({ type: 'INCREMENTBY2' });
store.dispatch({ type: 'INCREMENTBY2' });


store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENTBY2' });
