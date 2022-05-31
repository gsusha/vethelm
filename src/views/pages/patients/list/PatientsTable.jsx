import React, { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { getPatients } from '../store/patientsStore';
import { Button } from '@mui/material';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { Link } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';
const patientColumns = [
    {
        field: 'name',
        headerName: 'Имя',
        sortable: false,
        flex: 1
    },
    {
        field: 'type',
        headerName: 'Вид',
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

    const getTitle = () => {
        return (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Пациенты</p>
                <AnimateButton>
                    <Button
                        disableElevation
                        size="medium"
                        type="submit"
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/patients/new"
                    >
                        Добавить
                    </Button>
                </AnimateButton>
            </div>
        );
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
                />
            </div>
        </MainCard>
    );
}

export default PatientsTable;
