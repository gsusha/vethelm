import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'work';

export const getServices = createAsyncThunk('services/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}`)).data.data;
});

export const getServiceDetail = createAsyncThunk('services/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/view?id=${id}`)).data.data;
});

export const createOrUpdateService = createAsyncThunk('service/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data.data;
    }
});

export const deleteService = createAsyncThunk('service/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data.data;
});
