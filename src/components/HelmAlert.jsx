import React from 'react';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ShowSuccess = () => {
    return (
        <Alert severity="success" sx={{ width: '100%' }}>
            <AlertTitle>Успех</AlertTitle>
            Ваше действие прошло <strong>успешно!</strong>
        </Alert>
    );
};

export const ShowError = () => {
    return (
        <Alert severity="error" sx={{ width: '100%' }}>
            <AlertTitle>Ошибка</AlertTitle>
            Что-то пошло не так — <strong>попробуйте снова!</strong>
        </Alert>
    );
};
