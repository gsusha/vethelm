import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../../../config';

const path = 'consumable';

export const getAllStuff = createAsyncThunk('stuff/getList', async () => {
    return (await axios.get(`${config.apiUrl}/${path}`)).data.data;
});

export const getStuffDetail = createAsyncThunk('stuff/getDetail', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/view?id=${id}`)).data.data;
});

export const createOrUpdateStuff = createAsyncThunk('stuff/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`${config.apiUrl}/${path}/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`${config.apiUrl}/${path}/create`, data)).data.data;
    }
});

export const deleteStuff = createAsyncThunk('stuff/delete', async (id) => {
    return (await axios.get(`${config.apiUrl}/${path}/delete?id=${id}`)).data.data;
});
