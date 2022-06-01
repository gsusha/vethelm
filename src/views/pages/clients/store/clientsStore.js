import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'client';

export const getClients = createAsyncThunk('clients/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}`)).data.data;
});

export const getClientDetail = createAsyncThunk('clients/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/view?id=${id}`)).data.data;
});

export const createOrUpdateClient = createAsyncThunk('client/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/api/client/create`, data)).data.data;
    }
});

export const deleteClient = createAsyncThunk('${path}/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/api/client/delete?id=${id}`)).data.data;
});
