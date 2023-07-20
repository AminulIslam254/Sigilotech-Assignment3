import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
    yearlyToggle:false,
    userPlan:[
        

    ],
    addOns:[
        {id:"1"},
        {id:"2"},
        {id:"3"},
    ]


}

export const productReducer = (state = initialState, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case (ActionTypes.SET_PRODUCTS):
            return {
                ...state,
                products: state.products.concat(payload)
            };
        case (ActionTypes.SET_YEARLY_TOGGLE):
            return {
                ...state,
                yearlyToggle: payload
            };
        case (ActionTypes.USER_PLAN_SETUP):
            return {
                ...state,
                userPlan: payload
            };
        case (ActionTypes.ADD_ONS_SETUP):
            return {
                ...state,
                // addOns: {[Object.keys(payload)[0]]:payload[Object.keys(payload)[0]],[Object.keys(payload)[1]]:payload[Object.keys(payload)[1]]}
                addOns: state.addOns.map(
                    (val, index) => (val.id == payload.id) ? { ...val, [Object.keys(payload)[0]]:payload[Object.keys(payload)[0]],[Object.keys(payload)[1]]:payload[Object.keys(payload)[1]],[Object.keys(payload)[2]]:payload[Object.keys(payload)[2]]  } : val
                )
            };

        default:
            return state;
    }
}