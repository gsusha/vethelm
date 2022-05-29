import MainCard from '../../../../ui-component/cards/MainCard';
import { Grid, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorDetail } from '../store/doctorsStore';
import HelmLoading from '../../../../components/loading/HelmLoading';

function DoctorDetail() {
    const dispatch = useDispatch();
    const routeParams = useParams();
    const doctor = useSelector((state) => state.pages.doctor);
    const [noDoctor, setNoDoctor] = useState(false);
    const doctorId = useMemo(() => (routeParams?.id !== 'new' ? routeParams?.id : null), [routeParams]);
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

    useEffect(() => reset(doctor), [doctor]);

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
            // dispatch(newDynamicLink());
            setLoading(false);
        }
    }, [doctorId]);

    if (noDoctor) {
        return <MainCard>Нет такого доктора</MainCard>;
    }

    return (
        <MainCard title="Детальная страница врача">
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
        </MainCard>
    );
}

export default DoctorDetail;
