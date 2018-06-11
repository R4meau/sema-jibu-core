
import { ADD_PRODUCT_TO_ORDER, CLEAR_ORDER, REMOVE_PRODUCT, SET_PRODUCT_QUANTITY, SET_ORDER_CHANNEL } from "../actions/OrderActions";

let initialState = {products:[], channel:{salesChannel:'walkup'}};

const orderReducer = (state = initialState, action) => {
	console.log("orderReducer: " +action.type);
	let newState;
	switch (action.type) {
		case ADD_PRODUCT_TO_ORDER:
			newState = {...state};
			// Check if product exists
			for( let product of newState.products ){
				if( product.product.id ===  action.data.product.id){
					product.quantity += action.data.quantity;
					newState.products = newState.products.slice();
					return newState;
				}
			}
			newState.products = newState.products.concat( action.data) ;
			return newState;
		case CLEAR_ORDER:
			newState = {...state};
			newState.products = [];
			return newState;

		case REMOVE_PRODUCT:
			newState = {...state};
			newState.products = [];
			for( let product of state.products ) {
				if (product.product.id !== action.data.product.id) {
					newState.products.push(product);
				}
			}
			return newState;

		case SET_PRODUCT_QUANTITY:
			newState = {...state};
			newState.products = [];
			for( let product of state.products ) {
				if (product.product.id === action.data.product.id) {
					product.quantity = action.data.quantity;
				}
				newState.products.push(product);
			}
			return newState;

		case SET_ORDER_CHANNEL:
			newState = {...state};
			newState.channel  = action.data.channel;
			console.log("SET_ORDER_CHANNEL - " + JSON.stringify(newState.channel));
			return newState;

		default:
			return state;
	}
};

export default orderReducer;
