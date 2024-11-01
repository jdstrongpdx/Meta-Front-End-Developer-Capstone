import { useState } from "react";
import BookingForm1 from "./bookings/BookingForm1";
import BookingForm2 from "./bookings/BookingForm2";
import BookingForm3 from "./bookings/BookingForm3";
import BookingHeader from "./bookings/BookingHeader";

const initialValues = {
    time: "",
    date: "",
    occasion: "",
    guests: "",
    seating: "indoor",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    request: "",
};

const Bookings = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const [page, setPage] = useState(1);
    const [errors, setErrors] = useState({});
    const [availableTimes] = useState(
        ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    );

    const goToNextPage = () => {
        const newErrors = {};
        if (page === 1) {
            if (!formValues.date) newErrors.date = "Date is required";
            if (!formValues.time) newErrors.time = "Time is required";
            if (!formValues.guests) newErrors.guests = "Number of Guests is required";
        } else if (page === 2) {
            if (!formValues.guests) newErrors.guests = "Number of guests is required";
            if (!formValues.occasion) newErrors.occasion = "Occasion is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setPage((prevPage) => (prevPage < 3 ? prevPage + 1 : prevPage));
    };

    const goToPreviousPage = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error for changed field
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValues.date || !formValues.time || !formValues.guests || !formValues.occasion) {
            alert("Please fill in all required fields.");
            return;
        }
        console.log(formValues);
        // Submit the form data to your backend or API
    };

    return (
        <main>
            <BookingHeader />
            <form onSubmit={handleSubmit}>
                {page === 1 && (
                    <BookingForm1
                        formValues={formValues}
                        availableTimes={availableTimes}
                        onChange={handleChange}
                        onNext={goToNextPage}
                        errors={errors}
                    />
                )}
                {page === 2 && (
                    <BookingForm2
                        formValues={formValues}
                        availableTimes={availableTimes}
                        onChange={handleChange}
                        onNext={goToNextPage}
                        onPrevious={goToPreviousPage}
                        errors={errors}
                    />
                )}
                {page === 3 && (
                    <BookingForm3
                        formValues={formValues}
                        onPrevious={goToPreviousPage}
                        handleSubmit={handleSubmit}
                    />
                )}
            </form>
        </main>
    );
};

export default Bookings;
