import { useEffect, useReducer } from "react";
import Bookings from "./Bookings";
import { fetchAPI } from "../api"

const INITIAL_TIMES = [];
const UPDATE_TIMES = 'UPDATE_TIMES';
const INITIALIZE_TIMES = 'INITIALIZE_TIMES';

// REDUCER FOR AVAILABLE TIMES
const timesReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_TIMES:
            return action.payload;
        case INITIALIZE_TIMES:
            return INITIAL_TIMES;
        default:
            return state;
    }
};

const MainPage = () => {
    const [availableTimes, dispatch] = useReducer(timesReducer, INITIAL_TIMES);

    // USES DATE AND fetchAPI FUNCTION TO SET THE timesReducer STATE
    const fetchAndUpdateTimes = (date, type) => {
        const times = fetchAPI(date);
        dispatch({ type, payload: times });
    };

    const updateTimes = (date) => fetchAndUpdateTimes(date, UPDATE_TIMES);

    const initializeTimes = () => fetchAndUpdateTimes(new Date(), INITIALIZE_TIMES);

    useEffect(initializeTimes, []);

    // HARDCODED BOOKINGS ENTRY PASSING TIMES AND timesReducer STATE UPDATE FUNCTION
    return (
        <main>
            <Bookings
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </main>
    );
}

export default MainPage;
