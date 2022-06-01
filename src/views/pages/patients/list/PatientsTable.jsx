import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import { getPatients } from '../store/patientsStore';
import { Button } from '@mui/material';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';
import { localeDate } from '../../../../utils/functions';

const patientColumns = [
    {
        field: 'name',
        headerName: 'Имя',
        sortable: true,
        flex: 1
    },
    {
        field: 'type',
        headerName: 'Вид',
        sortable: true,
        flex: 1
    },
    {
        field: 'birth_data',
        headerName: 'Дата рождения',
        sortable: false,
        valueGetter: (params) => localeDate(params.row.birth_data),
        flex: 1
    },
    {
        field: 'steril',
        headerName: 'Стерилизован',
        sortable: false,
        valueGetter: (params) => (params.row.steril ? 'Да' : 'Нет') || '-',
        flex: 1
    },
    {
        field: 'weight',
        headerName: 'Вес',
        sortable: false,
        valueGetter: (params) => `${params.row.weight + ' кг' || '-'}`,
        flex: 1
    }
];

function PatientsTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const patients = useSelector((state) => state.pages.patients);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getPatients()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/patients/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Пациенты', 'patients')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={patients || []}
                    columns={patientColumns}
                    pageSize={5}
                    autoPageSize={true}
                    loading={loading}
                    disableColumnMenu={true}
                    disableSelectionOnClick={true}
                    onRowClick={(params) => handleClick(params.id)}
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>
        </MainCard>
    );
}

export default PatientsTable;
