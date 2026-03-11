    export function expenseReducer(state, action) {

    switch(action.type){

        case "ADD_EXPENSE":
        return [...state, action.payload];

        case "DELETE_EXPENSE":
        return state.filter((_, index) => index !== action.payload);

        default:
        return state;

    }

    }