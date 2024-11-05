import { useEffect, useState } from "react";
import BookingForm1 from "./bookings/BookingForm1";
import BookingForm2 from "./bookings/BookingForm2";
import BookingForm3 from "./bookings/BookingForm3";
import BookingHeader from "./bookings/BookingHeader";
import { submitAPI } from "../api";

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

const PAGE1 = 1;
const PAGE2 = 2;
const PAGE3 = 3;

const validateForm1 = formValues => {
    const newErrors = {};
    if (!formValues.date) newErrors.date = "Date is required";
    if (!formValues.time) newErrors.time = "Time is required";
    if (!formValues.guests) newErrors.guests = "Number of Guests is required";
    return newErrors;
};

const validateForm2 = formValues => {
    const newErrors = {};
    if (!formValues.firstName) newErrors.firstName = "First Name is required";
    if (!formValues.lastName) newErrors.lastName = "Last Name is required";
    if (!formValues.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    return newErrors;
};

const Bookings = ({ availableTimes, updateTimes }) => {
    const [formValues, setFormValues] = useState(initialValues);
    const [curPage, setCurPage] = useState(PAGE1);
    const [errors, setErrors] = useState({});

    // WHEN THE FORM DATE CHANGES, CALL THE updateTimes FUNCTION PASSED FROM MAIN TO UPDATE AVAILABLE TIMES
    useEffect(() => {
        const handleDateChange = () => {
            if (formValues.date) {
                const date = new Date(formValues.date);
                updateTimes(date);
            }
        };
        handleDateChange();
    }, [formValues.date]);

    // CHECKS EACH PAGE FOR ERRORS AND CONTROLS PAGE FLOW
    const goToNextPage = () => {
        const newErrors = (curPage === PAGE1) ? validateForm1(formValues) :
            (curPage === PAGE2) ? validateForm2(formValues) : {};

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        setCurPage((prevPage) => (prevPage < PAGE3 ? prevPage + 1 : prevPage));
    };

    const goToPreviousPage = () => {
        setCurPage((prevPage) => (prevPage > PAGE1 ? prevPage - 1 : prevPage));
    };

    // JS HANDLE PAGE FUNCTION UPDATING formVales and errors STATES
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    // FUNCTION FOR HANDLING FORM SUBMIT ON THE LAST FORM PAGE
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
                {curPage === PAGE1 &&
                    <BookingForm1
                        formValues={formValues}
                        availableTimes={availableTimes}
                        onChange={handleChange}
                        onNext={goToNextPage}
                        errors={errors} />}
                {curPage === PAGE2 &&
                    <BookingForm2
                        formValues={formValues}
                        onChange={handleChange}
                        onNext={goToNextPage}
                        onPrevious={goToPreviousPage}
                        errors={errors} />}
                {curPage === PAGE3 &&
                    <BookingForm3
                        formValues={formValues}
                        onPrevious={goToPreviousPage}
                        handleSubmit={handleSubmit} />}
            </form>
        </main>
    );
};

export default Bookings;
