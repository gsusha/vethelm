import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import MainCard from 'ui-component/cards/MainCard';

const DoctorsColumn = [
    {
        field: 'firstName',
        headerName: 'Имя'
    },
    {
        field: 'lastName',
        headerName: 'Фамилия'
    },
    {
        field: 'bday',
        headerName: 'Дата рождения',
        sortable: false
    },
    {
        field: 'pet',
        headerName: 'Питомец'
    }
];

const DoctorsRows = [
    {
        id: '1',
        firstName: 'Надежда',
        lastName: 'Соколова',
        bday: '10.05.1994',
        pet: 'Сильвия'
    },
    {
        id: '2',
        firstName: 'Ольга',
        lastName: 'Белюченко',
        bday: '10.05.1994',
        pet: 'Анютыч'
    },
    {
        id: '3',
        firstName: 'Ксения',
        lastName: 'Дьяченко',
        bday: '10.05.1994',
        pet: 'Юрчик'
    },
    {
        id: '4',
        firstName: 'Руслан',
        lastName: 'Узаиров',
        bday: '10.05.1994',
        pet: 'Киберпанк'
    }
];

function StuffTable() {
    return (
        <MainCard title="Расходники">
            <div style={{ width: '100%' }}>
                <DataGrid rows={DoctorsRows} columns={DoctorsColumn} pageSize={5} rowsPerPageOptions={[5]} />
            </div>
        </MainCard>
    );
}

export default StuffTable;
