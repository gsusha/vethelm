import moment from 'moment';
import 'moment/locale/ru';

export const localeDate = (date) => {
    moment.locale('ru');
    return moment(date).format('L');
};
