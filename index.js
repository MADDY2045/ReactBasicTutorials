const redux = require('redux');
const createStore = redux.createStore;
/*
General Entities:
1) A "store" that holds the state of your application
2) An action that describes the changes in the state of the application
3) A reducer which actually carries out the state transition depending on the action
*/

/*
Three Principles:
1)The state of your whole application is stored in an object tree within a single store
eg:{
    numOfCakes:10
}
2)The only way to change the state is to emit an action, an object describing what happened eg., dispatch(action)
{
    type:BUY_CAKE
}
3)To specify how the state tree is transformed by actions, you write pure reducers.
general syntax: REDUCER -{previuosState,action}=> newState
const reducer = (state,action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            numOfCakes:state.numOfCakes - 1
        }
    }
}
*/
/*--------------------------------------------------------------------*/

/* ----------------------let' s create a sample action--------------*/
const BUY_CAKE = 'BUY_CAKE';

/* function buyCake is an action creator and an action should contain a type */
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'My first redux action'//optional
    }
}

/*Now let's create a reducer to specify how the app's state changes in response to the actions sent to the store */
//(previousState,action) => newState

const initialState = {
    numOfCakes:10
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ... state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

/*........ now lets see about store ..........
Responsibilities:
1)Holds application state
2)Allows access to state via getState()
3)Allows state to be updated via dispatch(action)
4)Registers listeners via subscribe(listener)
5)Handles unregistering via the function returned by subscribe(listener)

Note:for this , we need to import reduxx at the top to access a method called createStore
*/

const store = createStore(reducer);//satisfies 1st responsibility
console.log('initial state',store.getState());//to check the second responsibility
const unsubscribe = store.subscribe(()=>{
    console.log('updated state',store.getState());//satisfies the fourth responsibility
})
store.dispatch(buyCake());//dispatches action creators which is the third responsibility
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();//satisfies fifth responsibility

/*Note:store.dispatch() is still logging the updated state even though it's written below the subscribe method ,meaning that it's asynchronous and bind it to subscribe method*/


