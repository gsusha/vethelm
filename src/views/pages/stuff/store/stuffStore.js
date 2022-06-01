import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllStuff = createAsyncThunk('stuff/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/consumable')).data.data;
});

export const getStuffDetail = createAsyncThunk('stuff/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/work/consumable?id=${id}`)).data.data;
});

export const createOrUpdateStuff = createAsyncThunk('stuff/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`http://192.168.1.103/api/consumable/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`http://192.168.1.103/api/consumable/create`, data)).data.data;
    }
});

export const deleteStuff = createAsyncThunk('stuff/delete', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/consumable/delete?id=${id}`)).data.data;
});
