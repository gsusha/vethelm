import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAppointments = createAsyncThunk('appointments/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/appointment')).data.data;
});

export const getAppointmentDetail = createAsyncThunk('appointments/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/appointment/view?id=${id}`)).data.data;
});
