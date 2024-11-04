const BookingForm1 = ({ formValues, onChange: handleChange, availableTimes, onNext, errors }) => {
    return (
        <>
            <h3>Find a table for any occasion</h3>
            <div className="doubleImg" role="img" aria-label="Restaurant and Restaurant Chef">
                <img src="/images/restaurant.jpg" alt="Restaurant"/>
                <img src="/images/restaurant%20chef%20B.jpg" alt="Restaurant Chef"/>
            </div>

            <label htmlFor="res-date">Choose a Date*</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formValues.date}
                onChange={handleChange}
                required
                aria-invalid={!!errors.date} // Indicates an error state
                style={{ border: errors.date ? '2px solid red' : '' }}
            />

            <label htmlFor="res-time">Choose a Time*</label>
            <select
                id="res-time"
                name="time"
                value={formValues.time}
                onChange={handleChange}
                required
                aria-invalid={!!errors.time} // Indicates an error state
                style={{ border: errors.time ? '2px solid red' : '' }}
            >
                <option value="" disabled>Select Time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests*</label>
            <select
                id="guests"
                name="guests"
                value={formValues.guests}
                onChange={handleChange}
                required
                aria-invalid={!!errors.guests} // Indicates an error state
                style={{ border: errors.guests ? '2px solid red' : '' }}
            >
                <option value="" disabled>Select Number of Diners</option>
                {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
            </select>

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formValues.occasion}
                onChange={handleChange}
                aria-invalid={!!errors.occasion} // Indicates an error state
                style={{ border: errors.occasion ? '2px solid red' : '' }}
            >
                <option value="">Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
            </select>

            <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                <label className="radio-label" htmlFor="indoor-seating">
                    Indoor
                </label>
                <input
                    type="radio"
                    id="indoor-seating" // Add ID for the radio input
                    name="seating"
                    value="indoor"
                    checked={formValues.seating === "indoor"}
                    onChange={handleChange}
                    aria-labelledby="indoor-seating"
                />
                <label className="radio-label" htmlFor="outdoor-seating">
                    Outdoor
                </label>
                <input
                    type="radio"
                    id="outdoor-seating" // Add ID for the radio input
                    name="seating"
                    value="outdoor"
                    checked={formValues.seating === "outdoor"}
                    onChange={handleChange}
                    aria-labelledby="outdoor-seating"
                />
            </div>

            <button
                className="rounded-button"
                onClick={onNext}
                aria-label="Continue to next page"
            >
                Lets go
            </button>
        </>
    );
}

export default BookingForm1;
