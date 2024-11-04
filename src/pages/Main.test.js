import { act } from '@testing-library/react';
import { fetchAPI } from '../api';

jest.mock('../api');

describe('actions', () => {
    let dispatch;
    let updateTimes;
    let initializeTimes;

    beforeEach(() => {
        dispatch = jest.fn();
        fetchAPI.mockReturnValue(['17:00', '18:00', '20:00']);

        updateTimes = (date) => {
            const times = fetchAPI(date);
            dispatch({ type: 'UPDATE_TIMES', payload: times });
        };

        initializeTimes = () => {
            dispatch({ type: 'INITIALIZE_TIMES' });
        };
    });

    test('updateTimes', () => {
        const date = new Date();
        act(() => {
            updateTimes(date);
        });

        expect(fetchAPI).toHaveBeenCalledWith(date);
        expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: ['17:00', '18:00', '20:00'] });
    });

    test('initializeTimes', () => {
        act(() => {
            initializeTimes();
        });

        expect(dispatch).toHaveBeenCalledWith({ type: 'INITIALIZE_TIMES' });
    });
});
