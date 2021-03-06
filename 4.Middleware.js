// for middleware at first install redux logger using this command -> npm i redux-logger
const { createStore, combineReducers, applyMiddleware } = require("redux"); 
const { default: logger } = require("redux-logger");


const BYE_CAKE = "BYE_CAKE";
const BYE_ICECREAM = "BYE_ICECREAM";
function bye_cake(){
    return{
        type:BYE_CAKE,
        info:"First redux ACTION"
    }
}
function bye_icecream(){
    return{
        type:BYE_ICECREAM,
        info:"Second redux ACTION"
    }
}


const initialCakeState = {
    numOfCakes:10
    
}
const initialIcecreamState ={
    numOfIcecream:20
}

const cakeReducer = (state = initialCakeState, action)=>{
        switch(action.type){
            case BYE_CAKE: return{
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
            default: return state
        }
}
const icecreamReducer = (state = initialIcecreamState, action)=>{
    switch(action.type){
        case BYE_ICECREAM: return{
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

// create a store 
const store = createStore(rootReducer,applyMiddleware(logger))
// print initial state 
console.log("Iitial state", store.getState());
const unsubscribe = store.subscribe(()=>{})


store.dispatch(bye_cake())
store.dispatch(bye_cake())
store.dispatch(bye_cake())

store.dispatch(bye_icecream())
store.dispatch(bye_icecream())
store.dispatch(bye_icecream())

unsubscribe()