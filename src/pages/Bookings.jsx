import {useEffect, useState} from "react";
import BookingForm1 from "./bookings/BookingForm1";
import BookingForm2 from "./bookings/BookingForm2";
import BookingForm3 from "./bookings/BookingForm3";
import BookingHeader from "./bookings/BookingHeader";
import {submitAPI} from "../api";

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

const Bookings = ({ availableTimes, updateTimes }) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [page, setPage] = useState(1);
    const [errors, setErrors] = useState({});


    useEffect(() => {
        const handleDateChange = () => {
            if (formValues.date) {
                const date = new Date(formValues.date);
                updateTimes(date);
            }
        };
        handleDateChange();
    }, [formValues.date]);

    const goToNextPage = () => {
        const newErrors = {};
        if (page === 1) {
            if (!formValues.date) newErrors.date = "Date is required";
            if (!formValues.time) newErrors.time = "Time is required";
            if (!formValues.guests) newErrors.guests = "Number of Guests is required";
        } else if (page === 2) {
            if (!formValues.firstName) newErrors.firstName = "First Name is required";
            if (!formValues.lastName) newErrors.lastName = "Last Name is required";
            if (!formValues.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
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
        const res = submitAPI(formValues)
        if (res === true) {
            alert("Thank you for booking your table!  We look forward to serving you soon.")
            window.location.reload();
        } else {
            alert("There was an error processing your request.")
        }

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
