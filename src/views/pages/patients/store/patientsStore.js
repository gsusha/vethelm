import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPatients = createAsyncThunk('patients/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/pet')).data.data;
});

export const getPatientDetail = createAsyncThunk('patients/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/pet/view?id=${id}`)).data.data;
});

export const createOrUpdatePatient = createAsyncThunk('patient/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`http://192.168.1.103/api/pet/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`http://192.168.1.103/api/pet/create`, data)).data.data;
    }
});

export const deletePatient = createAsyncThunk('patient/delete', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/pet/delete?id=${id}`)).data.data;
});
