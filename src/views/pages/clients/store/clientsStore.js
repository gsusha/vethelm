import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getClients = createAsyncThunk('clients/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/client')).data.data;
});

export const getClientDetail = createAsyncThunk('clients/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/client/view?id=${id}`)).data.data;
});
