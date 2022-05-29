import MainCard from '../../../../ui-component/cards/MainCard';
import { Grid, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getClientDetail } from '../store/clientsStore';
import HelmLoading from '../../../../components/loading/HelmLoading';

function ClientDetail() {
    const dispatch = useDispatch();
    const routeParams = useParams();
    const client = useSelector((state) => state.pages.client);
    const [noClient, setNoClient] = useState(false);
    const clientId = useMemo(() => (routeParams?.id !== 'new' ? routeParams?.id : null), [routeParams]);
    const [loading, setLoading] = useState(true);

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {}
    });

    const {
        control,
        reset,
        formState: { errors }
    } = methods;

    useEffect(() => reset(client), [client]);

    useEffect(() => {
        setLoading(true);
        if (clientId) {
            dispatch(getClientDetail(clientId)).then((action) => {
                setLoading(false);
                if (!action.payload) {
                    setNoClient(true);
                }
            });
        } else {
            // dispatch(newDynamicLink());
            console.log('no client id');
        }
    }, [clientId]);

    if (noClient) {
        return <MainCard>Нет такого клиента</MainCard>;
    }

    return (
        <MainCard title="Детальная страница клиента">
            {!loading ? (
                <FormProvider {...methods}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="space-between">
                        <Grid item xs={12}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Имя"
                                        id="name"
                                        type="text"
                                        fullWidth
                                        required
                                        error={!!errors?.name}
                                        helperText={errors?.name?.message}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                name="last_name"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Фамилия"
                                        id="last_name"
                                        type="text"
                                        fullWidth
                                        required
                                        error={!!errors?.name}
                                        helperText={errors?.name?.message}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                )}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Телефон"
                                        id="phone"
                                        type="text"
                                        fullWidth
                                        required
                                        error={!!errors?.name}
                                        helperText={errors?.name?.message}
                                        InputLabelProps={{ shrink: true }}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </FormProvider>
            ) : (
                <HelmLoading />
            )}
        </MainCard>
    );
}

export default ClientDetail;
