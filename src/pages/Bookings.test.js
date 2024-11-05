// Bookings.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Bookings from "./Bookings";

// MOCKS THE THREE FORM PAGES AND VERIFIES THAT THEY ARE BEING RENDERED AND UPDATED CORRECTLY
jest.mock("./bookings/BookingForm1", () => {
    return ({ formValues, onChange, onNext, errors }) => (
        <div>
            <input
                name="date"
                value={formValues.date}
                onChange={onChange}
                placeholder="Date"
            />
            <input
                name="time"
                value={formValues.time}
                onChange={onChange}
                placeholder="Time"
            />
            <input
                name="guests"
                value={formValues.guests}
                onChange={onChange}
                placeholder="Guests"
            />
            {errors.date && <span>{errors.date}</span>}
            {errors.time && <span>{errors.time}</span>}
            {errors.guests && <span>{errors.guests}</span>}
            <button onClick={onNext}>Next</button>
        </div>
    );
});

jest.mock("./bookings/BookingForm2", () => {
    return ({ formValues, onChange, onNext, onPrevious, errors }) => (
        <div>
            <input
                name="firstName"
                value={formValues.firstName}
                onChange={onChange}
                placeholder="First Name"
            />
            <input
                name="lastName"
                value={formValues.lastName}
                onChange={onChange}
                placeholder="Last Name"
            />
            <input
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={onChange}
                placeholder="Phone Number"
            />
            {errors.firstName && <span>{errors.firstName}</span>}
            {errors.lastName && <span>{errors.lastName}</span>}
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
            <button onClick={onPrevious}>Previous</button>
            <button onClick={onNext}>Next</button>
        </div>
    );
});

jest.mock("./bookings/BookingForm3", () => {
    return ({ onPrevious, handleSubmit }) => (
        <div>
            <button onClick={onPrevious}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
});

jest.mock("./bookings/BookingHeader", () => {
    return () => <h1>Booking Header</h1>;
});

describe("Bookings Component", () => {
    const mockUpdateTimes = jest.fn();

    beforeEach(() => {
        render(<Bookings availableTimes={[]} updateTimes={mockUpdateTimes} />);
    });

    test("renders Booking Header", () => {
        expect(screen.getByText(/Booking Header/i)).toBeInTheDocument();
    });

    test("navigates to BookingForm2 after filling BookingForm1", () => {
        fireEvent.change(screen.getByPlaceholderText(/Date/i), { target: { value: "2024-01-01" } });
        fireEvent.change(screen.getByPlaceholderText(/Time/i), { target: { value: "12:00" } });
        fireEvent.change(screen.getByPlaceholderText(/Guests/i), { target: { value: "2" } });

        fireEvent.click(screen.getByText(/Next/i));

        expect(screen.getByPlaceholderText(/First Name/i)).toBeInTheDocument();
    });

    test("shows errors when trying to navigate without filling BookingForm1", () => {
        fireEvent.click(screen.getByText(/Next/i));

        expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Number of Guests is required/i)).toBeInTheDocument();
    });

    test("navigates to BookingForm3 after filling BookingForm2", () => {
        fireEvent.change(screen.getByPlaceholderText(/Date/i), { target: { value: "2024-01-01" } });
        fireEvent.change(screen.getByPlaceholderText(/Time/i), { target: { value: "12:00" } });
        fireEvent.change(screen.getByPlaceholderText(/Guests/i), { target: { value: "2" } });
        fireEvent.click(screen.getByText(/Next/i)); // Navigate to BookingForm2

        fireEvent.change(screen.getByPlaceholderText(/First Name/i), { target: { value: "John" } });
        fireEvent.change(screen.getByPlaceholderText(/Last Name/i), { target: { value: "Doe" } });
        fireEvent.change(screen.getByPlaceholderText(/Phone Number/i), { target: { value: "1234567890" } });

        fireEvent.click(screen.getByText(/Next/i));

        expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    });

    test("submits the form and alerts the user", () => {
        // Mock window.alert
        window.alert = jest.fn();

        fireEvent.change(screen.getByPlaceholderText(/Date/i), { target: { value: "2024-01-01" } });
        fireEvent.change(screen.getByPlaceholderText(/Time/i), { target: { value: "12:00" } });
        fireEvent.change(screen.getByPlaceholderText(/Guests/i), { target: { value: "2" } });
        fireEvent.click(screen.getByText(/Next/i)); // Navigate to BookingForm2

        fireEvent.change(screen.getByPlaceholderText(/First Name/i), { target: { value: "John" } });
        fireEvent.change(screen.getByPlaceholderText(/Last Name/i), { target: { value: "Doe" } });
        fireEvent.change(screen.getByPlaceholderText(/Phone Number/i), { target: { value: "1234567890" } });

        fireEvent.click(screen.getByText(/Next/i)); // Navigate to BookingForm3

        fireEvent.click(screen.getByText(/Submit/i));

        expect(window.alert).toHaveBeenCalledWith("Thank you for booking your table!  We look forward to serving you soon.");
    });
});
