import { createStore } from 'redux';

const incrementCount = ({ incrementBy=1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy=1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count=0 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions i.e. the output purely depends on the input
// 2. Never change state or action inside a reducer.

// EXAMPLE OF A NOT-PURE function - will depend on a variable outside the fn scope 
// let result;
// const add = (a, b) => {
//     result = a + b;
//     return result;
// };

const countReducer = (state={count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


//I'd like to Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

//unsubscribe();

store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount( { decrementBy: 10 }));
store.dispatch(setCount({ count: 500 }));




