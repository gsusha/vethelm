import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { getAllStuff } from '../store/stuffStore';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const stuffColumns = [
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

function StuffTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stuff = useSelector((state) => state.pages.stuff);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getAllStuff()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/stuff/${id}`);
    };

    return (
        <MainCard title={HelmTitle('Расходники', 'stuff')}>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={stuff || []}
                    columns={stuffColumns}
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

export default StuffTable;
