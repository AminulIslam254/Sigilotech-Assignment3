import {ActionTypes} from '../constants/ActionTypes.js'


export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const setYearlyToggle=(products)=>{
    return{
        type:ActionTypes.SET_YEARLY_TOGGLE,
        payload:products,
    }
}
export const userPlanSetup=(products)=>{
    return{
        type:ActionTypes.USER_PLAN_SETUP,
        payload:products,
    }
}
export const addOnsSetup=(products)=>{
    return{
        type:ActionTypes.ADD_ONS_SETUP,
        payload:products,
    }
}
