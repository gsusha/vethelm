import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getServices = createAsyncThunk('services/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/work')).data.data;
});

export const getServiceDetail = createAsyncThunk('services/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/work/view?id=${id}`)).data.data;
});

export const createOrUpdateService = createAsyncThunk('service/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`http://192.168.1.103/api/work/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`http://192.168.1.103/api/work/create`, data)).data.data;
    }
});

export const deleteService = createAsyncThunk('service/delete', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/work/delete?id=${id}`)).data.data;
});
