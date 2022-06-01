import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'pet';

export const getPatients = createAsyncThunk('patients/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}`)).data.data;
});

export const getPatientDetail = createAsyncThunk('patients/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/view?id=${id}`)).data.data;
});

export const createOrUpdatePatient = createAsyncThunk('patient/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data.data;
    }
});

export const deletePatient = createAsyncThunk('patient/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data.data;
});
