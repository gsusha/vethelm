// action - state management
import * as actionTypes from './actions';
import { defaultAppointments, defaultShifts } from './constant';

export const initialState = {
    doctors: [],
    clients: [],
    patients: [],
    appointments: defaultAppointments,
    services: [],
    shifts: defaultShifts,
    stuff: [],
    appointment: null,
    doctor: null,
    client: null,
    patient: null,
    service: null,
    shift: null
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        // Врачи
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
        //
        // Клиенты
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
        //
        // Пациенты
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
        //
        // Приём
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
        //
        // Услуги
        case actionTypes.GET_SERVICES:
            return {
                services: (state.services = action.payload)
            };
        case actionTypes.GET_SERVICE:
            return {
                service: (state.service = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_SERVICE:
            return {
                service: (state.service = action.payload)
            };
        case actionTypes.DELETE_SERVICE:
            return {
                service: (state.service = action.payload)
            };
        //
        // Смены
        case actionTypes.GET_SHIFTS:
            return {
                shifts: (state.shifts = action.payload)
            };
        case actionTypes.GET_SHIFT:
            return {
                shift: (state.shift = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_SHIFT:
            return {
                shift: (state.shift = action.payload)
            };
        case actionTypes.DELETE_SHIFT:
            return {
                shift: (state.shift = action.payload)
            };
        //
        // Смены
        case actionTypes.GET_STUFF:
            return {
                stuff: (state.stuff = action.payload)
            };
        case actionTypes.GET_STUFF_DETAIL:
            return {
                stuff: (state.stuff = action.payload)
            };
        case actionTypes.CREATE_OR_UPDATE_STUFF:
            return {
                stuff: (state.stuff = action.payload)
            };
        case actionTypes.DELETE_STUFF:
            return {
                stuff: (state.stuff = action.payload)
            };
        default:
            return state;
    }
};

export default pageReducer;
