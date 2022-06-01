import MainCard from '../ui-component/cards/MainCard';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return (
        <MainCard title="404">
            <Typography sx={{ marginBottom: '20px' }}>Страница не найдена!</Typography>
            <Button sx={{ padding: 0 }} onClick={() => navigate(-1)}>
                Вернуться назад
            </Button>
        </MainCard>
    );
}

export default NotFound;
