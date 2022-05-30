import MainCard from '../../../../ui-component/cards/MainCard';
import { Button, Grid, IconButton, Modal, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdateDoctor, getDoctorDetail } from '../store/doctorsStore';
import HelmLoading from '../../../../components/loading/HelmLoading';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { Alert } from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from 'react-router-dom';

function DoctorDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const routeParams = useParams();
    const doctor = useSelector((state) => state.pages.doctor);
    const [noDoctor, setNoDoctor] = useState(false);
    const doctorId = useMemo(() => (routeParams?.id !== 'new' ? routeParams?.id : null), [routeParams]);
    const [loading, setLoading] = useState(true);
    const [submit, setSubmit] = useState(false);
    const [alert, setAlert] = useState(false);
    const [success, setSuccess] = useState(false);

    const closeAlert = () => {
        setAlert(false);
    };

    const openAlert = (success) => {
        success && setSuccess(true);
        setAlert(true);
        setTimeout(closeAlert, 1500);
    };

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {}
    });

    const {
        control,
        reset,
        trigger,
        getValues,
        setValue,
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
                openAlert();
            } else {
                openAlert(success);
                navigate('/doctors');
            }
            setSubmit(false);
        });
    }, [dispatch, doctorId]);

    const saveHandler = useCallback(async () => {
        await trigger().then((check) => {
            if (!check) {
                openAlert();
            }
            setSubmit(true);
            dispatch(createOrUpdateDoctor({ data: getValues(), id: doctorId })).then(({ payload }) => {
                if (!payload) {
                    openAlert();
                } else {
                    openAlert(success);
                    if (!doctorId) {
                        navigate(`/doctors/${payload.id}`);
                    }
                }
                setSubmit(false);
            });
        });
    }, [dispatch, doctorId, trigger]);

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
                    </Grid>
                </FormProvider>
            ) : (
                <HelmLoading />
            )}

            <Modal open={alert} sx={{ width: '50%', margin: 'auto', top: '40%' }}>
                {success ? (
                    <Alert
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setAlert(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        <AlertTitle>Ошибка</AlertTitle>
                        Что-то пошло не так — <strong>попробуйте снова!</strong>
                    </Alert>
                ) : (
                    <Alert
                        severity="success"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setAlert(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                    >
                        <AlertTitle>Успех</AlertTitle>
                        Ваше действие прошло <strong>успешно!</strong>
                    </Alert>
                )}
            </Modal>
        </MainCard>
    );
}

export default DoctorDetail;
