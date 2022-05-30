import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { getClients } from '../store/clientsStore';
import { Link, useNavigate } from 'react-router-dom';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { Button } from '@mui/material';

const clientsColumn = [
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

    const getTitle = () => {
        return (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Клиенты</p>
                <AnimateButton>
                    <Button
                        disableElevation
                        size="medium"
                        type="submit"
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/clients/new"
                    >
                        Добавить
                    </Button>
                </AnimateButton>
            </div>
        );
    };

    return (
        <MainCard title={getTitle()}>
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
