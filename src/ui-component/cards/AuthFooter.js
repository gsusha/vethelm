// material-ui
import { Link, Stack, Typography } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://github.com/gsusha" target="_blank" underline="hover">
            gsusha
        </Typography>
    </Stack>
);

export default AuthFooter;
