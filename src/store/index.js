import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';

// ==============================|| REDUX - MAIN STORE ||============================== //

const middlewares = [];

const { createLogger } = require(`redux-logger`);
const logger = createLogger({ collapsed: (getState, action, logEntry) => !logEntry.error });

middlewares.push(logger);

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        }).concat(middlewares)
});

const persister = 'Free';

export { store, persister };
