import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { getClients } from '../store/clientsStore';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const clientsColumn = [
    {
        field: 'name',
        headerName: 'Имя',
        sortable: false,
        flex: 1
    },
    {
        field: 'last_name',
        headerName: 'Фамилия',
        sortable: true,
        flex: 1
    },
    {
        field: 'phone',
        headerName: 'Телефон',
        sortable: false,
        flex: 1
    }
];

function ClientsTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const clients = useSelector((state) => state.pages.clients);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getClients()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/clients/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Клиенты', 'clients')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={clients || []}
                    columns={clientsColumn}
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

export default ClientsTable;
