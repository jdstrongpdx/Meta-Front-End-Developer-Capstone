import {useState} from "react";
import RoundedButton from "../buttons/RoundedButton";

const MainPage = () => {
    const [availableTimes] = useState(
        ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    );


    return (
        <main>
            <h2>Welcome to </h2>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <RoundedButton linkHref="/bookings" title="Reserve a Table"/>
        </main>
    );
}

export default MainPage;
