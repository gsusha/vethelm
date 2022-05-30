import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDoctors = createAsyncThunk('doctors/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/employer')).data.data;
});

export const getDoctorDetail = createAsyncThunk('doctors/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/employer/view?id=${id}`)).data.data;
});

export const createOrUpdateDoctor = createAsyncThunk('doctor/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`http://192.168.1.103/api/employer/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`http://192.168.1.103/api/employer/create`, data)).data.data;
    }
});

export const deleteDoctor = createAsyncThunk('doctor/delete', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/employer/delete?id=${id}`)).data.data;
});
