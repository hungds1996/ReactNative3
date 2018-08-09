import { CHANGE_BASE_VALUE, CHANGE_CURRENT_UNIT_INDEX } from './types';

export const changeBaseValue = value => ({
    type: CHANGE_BASE_VALUE,
    payload: value,
});

export const changeCurrentUnitIndex = currentUnitIndex => ({
    type: CHANGE_CURRENT_UNIT_INDEX,
    payload: currentUnitIndex 
})

