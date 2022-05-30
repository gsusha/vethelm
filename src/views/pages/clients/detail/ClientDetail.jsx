import MainCard from '../../../../ui-component/cards/MainCard';
import { Button, Grid, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getClientDetail } from '../store/clientsStore';
import HelmLoading from '../../../../components/loading/HelmLoading';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { createOrUpdateDoctor } from '../../doctors/store/doctorsStore';

function ClientDetail() {
    const dispatch = useDispatch();
    const routeParams = useParams();
    const client = useSelector((state) => state.pages.client);
    const [noClient, setNoClient] = useState(false);
    const clientId = useMemo(() => (routeParams?.id !== 'new' ? routeParams?.id : null), [routeParams]);
    const [loading, setLoading] = useState(true);
    const [submit, setSubmit] = useState(false);

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {}
    });

    const {
        control,
        reset,
        trigger,
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
            setLoading(false);
        }
    }, [clientId, dispatch]);

    const saveHandler = useCallback(async () => {
        await trigger().then((check) => {
            if (!check) {
                return alert('Ошибка');
            }
            setSubmit(true);
            dispatch(createOrUpdateClient({ data: getValues(), id: clientId })).then(({ payload }) => {
                if (!payload) {
                    alert(clientId ? 'Ошибка обновления' : 'Ошибка создания');
                } else {
                    alert(clientId ? 'Успешно обновлено' : 'Успешно создано');
                    if (!clientId) {
                        history.push(`/clients/${payload.id}`);
                    }
                }
                setSubmit(false);
            });
        });
    }, [clientId, errors]);

    if (noClient) {
        return <MainCard>Клиент не найден</MainCard>;
    }

    const getTitle = () => {
        return (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Детальная страница клиента</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <AnimateButton>
                        <Button disableElevation size="medium" type="submit" variant="contained" color="secondary" onClick={saveHandler}>
                            {clientId ? 'Обновить' : 'Сохранить'}
                        </Button>
                    </AnimateButton>
                    {clientId && (
                        <AnimateButton>
                            <Button disableElevation size="medium" type="submit" variant="contained" color="warning">
                                Удалить
                            </Button>
                        </AnimateButton>
                    )}
                </div>
            </div>
        );
    };

    return (
        <MainCard title={getTitle()}>
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
