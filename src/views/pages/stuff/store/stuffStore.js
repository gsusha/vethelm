import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllStuff = createAsyncThunk('stuff/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/consumables')).data.data;
});

export const getStuffDetail = createAsyncThunk('stuff/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/work/consumables?id=${id}`)).data.data;
});

export const createOrUpdateStuff = createAsyncThunk('stuff/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`http://192.168.1.103/api/consumables/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`http://192.168.1.103/api/consumables/create`, data)).data.data;
    }
});

export const deleteStuff = createAsyncThunk('stuff/delete', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/consumables/delete?id=${id}`)).data.data;
});
