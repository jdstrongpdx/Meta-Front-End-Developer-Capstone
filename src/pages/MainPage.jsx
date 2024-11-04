import RoundedButton from "../buttons/RoundedButton";
import {useReducer} from "react";
import Bookings from "./Bookings";


const initialTimes = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// REDUCER FUNCTION FOR AVAILABLE TIMES
const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload; // Update available times based on action payload
        case 'INITIALIZE_TIMES':
            return initialTimes; // Initialize available times
        default:
            return state;
    }
};

const MainPage = () => {
    const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
    };

    const initializeTimes = () => {
        dispatch({ type: 'INITIALIZE_TIMES' });
    };


    return (
        <main>
{/*            <h2>Welcome to </h2>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <RoundedButton linkHref="/bookings" title="Reserve a Table"/>*/}
            <Bookings
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                initializeTimes={initializeTimes}
            />
        </main>
    );
}

export default MainPage;
