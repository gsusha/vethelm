import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { getServices } from '../store/servicesStore';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { Button } from '@mui/material';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const serviceColumns = [
    {
        field: 'role',
        headerName: 'Должность',
        flex: 1
    },
    {
        field: 'full_name',
        headerName: 'Имя',
        sortable: false,
        valueGetter: (params) => `${params.row.name || ''} ${params.row.last_name || ''}`,
        flex: 1
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        sortable: false,
        flex: 1
    },
    {
        field: 'birth_data',
        headerName: 'Дата рождения',
        sortable: false,
        flex: 1
    }
];

function ServicesTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const services = useSelector((state) => state.pages.services);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getServices()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/services/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Услуги', 'services')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={services || []}
                    columns={serviceColumns}
                    pageSize={5}
                    autoPageSize={true}
                    loading={loading}
                    disableColumnMenu={true}
                    disableSelectionOnClick={true}
                    onRowClick={(params) => handleClick(params.id)}
                />
            </div>
        </MainCard>
    );
}

export default ServicesTable;
