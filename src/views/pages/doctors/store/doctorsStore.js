import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDoctors = createAsyncThunk('doctors/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/employer')).data.data;
});

export const getDoctorDetail = createAsyncThunk('doctors/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/employer/view?id=${id}`)).data.data;
});
