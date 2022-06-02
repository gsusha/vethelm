import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Button, Grid, Typography } from '@mui/material';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EarningIcon from '../../../assets/images/icons/earning.svg';
import { useSelector } from 'react-redux';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: '50%',
        zIndex: 1,
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: 1,
        width: 210,
        height: 210,
        background: theme.palette.primary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

const AverageBillCard = ({ isLoading }) => {
    const appointments = useSelector((state) => state.pages.appointments);
    const theme = useTheme();

    const [timeValue, setTimeValue] = useState(false);

    const handleChangeTime = (event, newValue) => {
        setTimeValue(newValue);
    };

    let daySum = 0;
    let yesterdaySum = 0;
    let monthSum = 0;

    let dayPrices = [];
    let monthPrices = [];

    if (appointments && !appointments.isEmpty) {
        appointments.map((item) => {
            //Сумма за текущий день
            let dataDay = new Date(item.create_data);
            let currentDay = new Date();
            if (item.price && dataDay.toLocaleDateString() === currentDay.toLocaleDateString()) {
                daySum += item.price;
                dayPrices.push(item.price);
            }

            //Сумма за текущий месяц
            let dataMonth = new Date(item.create_data).getMonth();
            let currentMonth = new Date().getMonth();
            if (item.price && dataMonth === currentMonth) {
                monthSum += item.price;
                monthPrices.push(item.price);
            }

            //Сумма за вчерашний день
            let prevCurrentDay = new Date();
            prevCurrentDay.setDate(currentDay.getDate() - 1);
            if (item.price && dataDay.toLocaleDateString() === prevCurrentDay.toLocaleDateString()) {
                yesterdaySum += item.price;
            }
        });
    }

    const monthData = {
        type: 'line',
        height: 90,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                show: false,
                min: 0,
                max: Math.max.apply(null, monthPrices) + 10
            },
            legend: {
                show: false
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: 'Total Order'
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: '',
                data: monthPrices
            }
        ]
    };

    const dayData = {
        type: 'line',
        height: 90,
        options: {
            chart: {
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#fff'],
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                width: 3
            },
            yaxis: {
                show: false,
                min: 0,
                max: Math.max.apply(null, dayPrices) + 10
            },
            tooltip: {
                theme: 'dark',
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    show: false
                },
                marker: {
                    show: false
                }
            }
        },
        series: [
            {
                name: '',
                data: dayPrices
            }
        ]
    };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                backgroundColor: theme.palette.primary[800],
                                                color: '#fff',
                                                mt: 1
                                            }}
                                        >
                                            <img src={EarningIcon} alt="Notification" />
                                        </Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            disableElevation
                                            variant={timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, true)}
                                        >
                                            Месяц
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={!timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{ color: 'inherit' }}
                                            onClick={(e) => handleChangeTime(e, false)}
                                        >
                                            День
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container alignItems="center">
                                    <Grid item xs={6}>
                                        <Grid container alignItems="center">
                                            <Grid item>
                                                {timeValue ? (
                                                    <Typography
                                                        sx={{
                                                            fontSize: '2.125rem',
                                                            fontWeight: 500,
                                                            mr: 1,
                                                            mt: 1.75,
                                                            mb: 0.75
                                                        }}
                                                    >
                                                        {monthSum + ' ₽' || 'Нет данных'}
                                                    </Typography>
                                                ) : (
                                                    <Typography
                                                        sx={{
                                                            fontSize: '2.125rem',
                                                            fontWeight: 500,
                                                            mr: 1,
                                                            mt: 1.75,
                                                            mb: 0.75
                                                        }}
                                                    >
                                                        {daySum + ' ₽' || 'Нет данных'}
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item>
                                                {!timeValue ? (
                                                    <Avatar
                                                        sx={{
                                                            ...theme.typography.smallAvatar,
                                                            backgroundColor: theme.palette.primary[200],
                                                            color: theme.palette.primary.dark
                                                        }}
                                                    >
                                                        <ArrowDownwardIcon
                                                            fontSize="inherit"
                                                            sx={{
                                                                transform:
                                                                    daySum < yesterdaySum ? 'rotate3d(1, 1, 1, 45deg)' : 'rotate(220deg)'
                                                            }}
                                                        />
                                                    </Avatar>
                                                ) : (
                                                    ''
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '1rem',
                                                        fontWeight: 500,
                                                        color: theme.palette.primary[200]
                                                    }}
                                                >
                                                    Средний чек
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {timeValue ? <Chart {...monthData} /> : <Chart {...dayData} />}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

AverageBillCard.propTypes = {
    isLoading: PropTypes.bool
};

export default AverageBillCard;
