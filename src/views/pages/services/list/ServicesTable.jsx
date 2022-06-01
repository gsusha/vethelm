import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { getServices } from '../store/servicesStore';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const serviceColumns = [
    {
        field: 'name',
        headerName: 'Имя',
        sortable: true,
        flex: 1
    },
    {
        field: 'type',
        headerName: 'Тип',
        sortable: true,
        flex: 1
    },
    {
        field: 'price',
        headerName: 'Цена',
        sortable: false,
        valueGetter: (params) => params.row.price + ' ₽',
        width: 200
    }
];

function ServicesTable() {
    нф;
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
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>
        </MainCard>
    );
}

export default ServicesTable;
