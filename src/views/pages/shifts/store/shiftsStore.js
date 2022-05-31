import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getShifts = createAsyncThunk('shifts/getList', async () => {
    return (await axios.get('http://192.168.1.103/api/working_shift')).data.data;
});

export const getShiftDetail = createAsyncThunk('shifts/getDetail', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/working_shift/view?id=${id}`)).data.data;
});

export const createOrUpdateShift = createAsyncThunk('shift/createOrUpdate', async ({ data, id }) => {
    if (id) {
        return (await axios.post(`http://192.168.1.103/api/working_shift/update?id=${id}`, data)).data.data;
    } else {
        return (await axios.post(`http://192.168.1.103/api/working_shift/create`, data)).data.data;
    }
});

export const deleteShift = createAsyncThunk('shift/delete', async (id) => {
    return (await axios.get(`http://192.168.1.103/api/working_shift/delete?id=${id}`)).data.data;
});
