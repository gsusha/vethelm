import AnimateButton from '../../ui-component/extended/AnimateButton';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

export const HelmTitle = (title, url) => {
    const link = `/${url}/new`;
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ margin: 0 }}>{title}</p>
            <AnimateButton>
                <Button disableElevation size="medium" type="submit" variant="contained" color="secondary" component={Link} to={link}>
                    Добавить
                </Button>
            </AnimateButton>
        </div>
    );
};
