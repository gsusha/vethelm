import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../config';

const path = 'appointment';

export const getAppointments = createAsyncThunk('appointments/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}`)).data.data;
});

export const getAppointmentDetail = createAsyncThunk('appointments/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/view?id=${id}`)).data.data;
});

export const createOrUpdateAppointment = createAsyncThunk('doctor/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data.data;
    }
});

export const deleteAppointment = createAsyncThunk('doctor/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data.data;
});
