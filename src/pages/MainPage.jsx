import {useEffect, useReducer} from "react";
import Bookings from "./Bookings";
import {fetchAPI} from "../api"

const initialTimes = [];

// REDUCER FUNCTION FOR AVAILABLE TIMES
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload;
        case 'INITIALIZE_TIMES':
            return initialTimes;
        default:
            return state;
    }
};

const MainPage = () => {
    const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

    const updateTimes = (date) => {
        const times = fetchAPI(date);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    };

    const initializeTimes = () => {
        const initialDate = new Date();
        const times = fetchAPI(initialDate);
        dispatch({ type: 'INITIALIZE_TIMES', payload: times });
    };

    useEffect(() => {
        initializeTimes();
    }, []);

    return (
        <main>
{/*            <h2>Welcome to </h2>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <RoundedButton linkHref="/bookings" title="Reserve a Table"/>*/}
            <Bookings
                availableTimes={availableTimes}
                updateTimes={updateTimes}
            />
        </main>
    );
}

export default MainPage;
