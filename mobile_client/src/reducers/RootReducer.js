
import { combineReducers } from 'redux';
import customerReducer from "./CustomerReducer";
import networkReducer from "./NetworkReducer";
import customerBarReducer from "./CustomerBarReducer";
import productReducer from "./ProductReducer";
import orderReducer from "./OrderReducer";
import toolBarReducer from "./ToolbarReducer";
import reportReducer from "./ReportReducer";
import settingsReducer from "./SettingsReducer";
import salesLoggingReducer from "./SalesLoggingReducer";

// Combine all the reducers
const RootReducer = combineReducers({
	customerReducer,
	networkReducer,
	customerBarReducer,
	productReducer,
	orderReducer,
	toolBarReducer,
	reportReducer,
	settingsReducer,
	salesLoggingReducer
});

export default RootReducer;
