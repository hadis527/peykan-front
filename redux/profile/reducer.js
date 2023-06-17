import {
    ADD_TO_DO_LIST,
    UPDATE_TO_DO_LIST,
    DELETE_TO_DO_LIST,
    TO_DO_LIST,
    UPDATE_TO_DO_MODAL
} from './const';
import RecordController from '../../controllers/RecordController';
const INIT_STATE = {
    profileList: [],
    updateprofileModal :false,
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case TO_DO_LIST:
            return {
                ...state,
                profileList:  action.payload
            }
        case ADD_TO_DO_LIST:
            return {
                ...state,
                profileList: RecordController.add(
                    state.profileList,
                    action.payload
                ),
            }
        case UPDATE_TO_DO_LIST:
            return {
                ...state,
                profileList: RecordController.update(
                    state.profileList,
                    action.payload
                ),
            }
        case DELETE_TO_DO_LIST:
            return {
                ...state,
                profileList: RecordController.delete(
                    state.profileList,
                    action.payload
                ),
            }
        case UPDATE_TO_DO_MODAL:
            return{
                ...state,
                updateprofileModal: action.payload
            }
        default: return { ...state };
    }
}
