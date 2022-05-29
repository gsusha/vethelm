import MainCard from '../../../../ui-component/cards/MainCard';
import { Button, Grid, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdatePatient, getPatientDetail } from '../store/patientsStore';
import HelmLoading from '../../../../components/loading/HelmLoading';
import AnimateButton from '../../../../ui-component/extended/AnimateButton';
import { DatePicker, LocalizationProvider, ToggleButton, ToggleButtonGroup } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';

function PatientDetail() {
    const dispatch = useDispatch();
    const routeParams = useParams();
    const patient = useSelector((state) => state.pages.patient);
    const [noPatient, setNoPatient] = useState(false);
    const patientId = useMemo(() => (routeParams?.id !== 'new' ? routeParams?.id : null), [routeParams]);
    const [loading, setLoading] = useState(true);
    const [submit, setSubmit] = useState(false);
    const [date, setDate] = useState('');
    const [alignment, setAlignment] = useState('');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const methods = useForm({
        mode: 'onChange',
        defaultValues: {}
    });

    const {
        control,
        reset,
        getValues,
        setValue,
        trigger,
        formState: { errors }
    } = methods;

    useEffect(() => reset(patient), [patient]);

    useEffect(() => {
        setLoading(true);
        if (patientId) {
            dispatch(getPatientDetail(patientId)).then((action) => {
                setLoading(false);
                if (!action.payload) {
                    setNoPatient(true);
                }
            });
        } else {
            setLoading(false);
        }
    }, [patientId]);

    const saveHandler = useCallback(async () => {
        await trigger().then((check) => {
            if (!check) {
                return alert('Ошибка');
            }
            setSubmit(true);
            dispatch(createOrUpdatePatient({ data: getValues(), id: patientId })).then(({ payload }) => {
                if (!payload) {
                    alert(patientId ? 'Ошибка обновления' : 'Ошибка создания');
                } else {
                    alert(patientId ? 'Успешно обновлено' : 'Успешно создано');
                    if (!patientId) {
                        history.push(`/patient/detail/${payload.id}`);
                    }
                }
                setSubmit(false);
            });
        });
    }, [patientId, errors]);

    if (noPatient) {
        return <MainCard>Нет такого пациента</MainCard>;
    }

    const getTitle = () => {
        return (
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ margin: 0 }}>Детальная страница пациента</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <AnimateButton>
                        <Button disableElevation size="medium" type="submit" variant="contained" color="secondary" onClick={saveHandler}>
                            {patientId ? 'Обновить' : 'Сохранить'}
                        </Button>
                    </AnimateButton>
                    {patientId && (
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
                        {/*<Grid item xs={12}>*/}
                        {/*    <Controller*/}
                        {/*        name="name"*/}
                        {/*        control={control}*/}
                        {/*        render={({ field }) => (*/}
                        {/*            <TextField*/}
                        {/*                {...field}*/}
                        {/*                label="Имя"*/}
                        {/*                id="name"*/}
                        {/*                type="text"*/}
                        {/*                fullWidth*/}
                        {/*                required*/}
                        {/*                error={!!errors?.name}*/}
                        {/*                helperText={errors?.name?.message}*/}
                        {/*                InputLabelProps={{ shrink: true }}*/}
                        {/*            />*/}
                        {/*        )}*/}
                        {/*    />*/}
                        {/*</Grid>*/}

                        <Grid item xs={12}>
                            <Controller
                                name="type"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Тип"
                                        id="type"
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

                        <Grid item xs={12}>
                            <Controller
                                name="weight"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Вес"
                                        id="weight"
                                        type="number"
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
                            <ToggleButtonGroup
                                value={alignment || getValues().steril}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                            >
                                <ToggleButton value="1" aria-label="centered">
                                    Стерилизован
                                </ToggleButton>
                                <ToggleButton value="0" aria-label="centered">
                                    Не стерилизован
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </FormProvider>
            ) : (
                <HelmLoading />
            )}
        </MainCard>
    );
}

export default PatientDetail;
