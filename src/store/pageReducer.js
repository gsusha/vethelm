// action - state management
import * as actionTypes from './actions';

export const initialState = {
    doctors: [],
    clients: [],
    patients: [],
    appointments: [
        {
            data: [],
            loading: false,
            currentDate: new Date(),
            currentViewName: 'Week'
        }
    ],
    appointment: null,
    doctor: null,
    client: null,
    patient: null
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DOCTORS:
            return {
                doctors: (state.doctors = action.payload)
            };
        case actionTypes.GET_DOCTOR:
            return {
                doctor: (state.doctor = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_DOCTOR:
            return {
                doctor: (state.doctor = action.payload)
            };
        case actionTypes.DELETE_DOCTOR:
            return {
                doctor: (state.doctor = action.payload)
            };
        case actionTypes.GET_CLIENTS:
            return {
                clients: (state.clients = action.payload)
            };
        case actionTypes.GET_CLIENT:
            return {
                client: (state.client = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_CLIENT:
            return {
                client: (state.client = action.payload)
            };
        case actionTypes.DELETE_CLIENT:
            return {
                client: (state.client = action.payload)
            };
        case actionTypes.GET_PATIENTS:
            return {
                patients: (state.patients = action.payload)
            };
        case actionTypes.GET_PATIENT:
            return {
                patient: (state.patient = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_PATIENT:
            return {
                patient: (state.patient = action.payload)
            };
        case actionTypes.DELETE_PATIENT:
            return {
                patient: (state.patient = action.payload)
            };
        case actionTypes.GET_APPOINTMENTS:
            return {
                appointments: (state.appointments = action.payload)
            };
        case actionTypes.GET_APPOINTMENT:
            return {
                appointment: (state.appointment = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_APPOINTMENT:
            return {
                appointment: (state.appointment = action.payload)
            };
        case actionTypes.DELETE_APPOINTMENT:
            return {
                appointment: (state.appointment = action.payload)
            };
        default:
            return state;
    }
};

export default pageReducer;
