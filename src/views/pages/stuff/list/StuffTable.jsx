import { useEffect, useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { getAllStuff } from '../store/stuffStore';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, ruRU } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { HelmTitle } from '../../../../components/cardHeader/HelmTitle';

const stuffColumns = [
    {
        field: 'name',
        headerName: 'Название',
        sortable: false,
        flex: 1
    },
    {
        field: 'measure',
        headerName: 'Ед. измерения',
        sortable: false,
        width: 150
    },
    {
        field: 'count',
        headerName: 'Количество',
        sortable: false,
        width: 150
    },
    {
        field: 'price',
        headerName: 'Цена',
        sortable: false,
        valueGetter: (params) => params.row.price + ' ₽',
        width: 150
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
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                />
            </div>
        </MainCard>
    );
}

export default StuffTable;
