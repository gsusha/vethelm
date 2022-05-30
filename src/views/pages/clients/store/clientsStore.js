import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getClients = createAsyncThunk('clients/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/client')).data.data;
});

export const getClientDetail = createAsyncThunk('clients/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/client/view?id=${id}`)).data.data;
});

export const createOrUpdateClient = createAsyncThunk('client/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`http://192.168.1.103/api/client/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`http://192.168.1.103/api/client/create`, data)).data.data;
    }
});

export const deleteClient = createAsyncThunk('client/delete', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/client/delete?id=${id}`)).data.data;
});
