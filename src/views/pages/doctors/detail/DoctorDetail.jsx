import MainCard from '../../../../ui-component/cards/MainCard';
import { Button, Grid, Snackbar, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdateDoctor, getDoctorDetail } from '../store/doctorsStore';
import HelmLoading from '../../../../components/loading/HelmLoading';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { useNavigate } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import { ShowError, ShowSuccess } from '../../../../components/HelmAlert';

function DoctorDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeParams = useParams();

    const doctor = useSelector((state) => state.pages.doctor);
    const doctorId = useMemo(() => (routeParams?.id !== 'new' ? routeParams?.id : null), [routeParams]);

    const [noDoctor, setNoDoctor] = useState(false);
    const [loading, setLoading] = useState(true);
    const [submit, setSubmit] = useState(false);
    const [date, setDate] = useState('');
    const [success, setSuccess] = useState('');

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {}
    });

    const {
        control,
        reset,
        trigger,
        getValues,
        formState: { errors }
    } = methods;

    useEffect(() => reset(doctor), [doctor, reset]);

    useEffect(() => {
        setLoading(true);
        if (doctorId) {
            dispatch(getDoctorDetail(doctorId)).then((action) => {
                setLoading(false);
                if (!action.payload) {
                    setNoDoctor(true);
                }
            });
        } else {
            setLoading(false);
        }
    }, [dispatch, doctorId]);

    const deleteHandler = useCallback(() => {
        dispatch(deleteDoctor(doctorId)).then(({ payload }) => {
            if (!payload) {
                setSuccess(false);
            } else {
                setSuccess(true);
                navigate('/doctors');
            }
            setSubmit(false);
        });
    }, [dispatch, doctorId, navigate]);

    const saveHandler = useCallback(async () => {
        await trigger().then((check) => {
            if (!check) {
                setSuccess(false);
            }
            setSubmit(true);
            dispatch(createOrUpdateDoctor({ data: getValues(), id: doctorId })).then(({ payload }) => {
                if (payload === 'undefined') {
                    setSuccess(false);
                } else {
                    setSuccess(true);
                    if (!doctorId) {
                        navigate(`/doctors/${payload.id}`);
                    }
                }
                setSubmit(false);
            });
        });
    }, [dispatch, doctorId, getValues, navigate, trigger]);

    if (noDoctor) {
        return <MainCard>Врач не найден</MainCard>;
    }

    const getTitle = () => {
        return (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Детальная страница врача</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <AnimateButton>
                        <Button disableElevation size="medium" type="submit" variant="contained" color="secondary" onClick={saveHandler}>
                            {doctorId ? 'Обновить' : 'Сохранить'}
                        </Button>
                    </AnimateButton>
                    {doctorId && (
                        <AnimateButton>
                            <Button
                                disableElevation
                                size="medium"
                                type="submit"
                                variant="contained"
                                color="warning"
                                onClick={deleteHandler}
                            >
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
                                name="role"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Должность"
                                        id="role"
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

                        <Grid item xs={12}>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Пароль"
                                        id="password"
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
                            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                <DatePicker
                                    id="birth_data"
                                    label="Дата рождения"
                                    value={date || getValues().birth_data}
                                    onChange={(newDate) => {
                                        setDate(newDate);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                    required
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </FormProvider>
            ) : (
                <HelmLoading />
            )}

            <Snackbar open={success !== ''} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                {success ? ShowSuccess() : ShowError()}
            </Snackbar>
        </MainCard>
    );
}

export default DoctorDetail;
