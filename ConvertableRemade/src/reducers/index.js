import unitListReducer from "./unitListReducer";
import baseValueReducer from "./baseValueReducer";
import currentUnitIndexReducer from './currentUnitIndexReducer'

export default {
    unitList: unitListReducer,
    baseValue: baseValueReducer,
    currentUnitIndex: currentUnitIndexReducer,
};
