import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { getDoctors } from '../store/doctorsStore';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const doctorColumns = [
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

function DoctorsTable() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const doctors = useSelector((state) => state.pages.doctors);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        dispatch(getDoctors()).then(() => setLoading(false));
    }, [dispatch]);

    const handleClick = (id) => {
        navigate(`/doctors/detail/${id}`);
    };

    return (
        <MainCard title="Врачи">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={doctors || []}
                    columns={doctorColumns}
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

export default DoctorsTable;
