const BookingForm1 = ({ formValues, onChange: handleChange, availableTimes, onNext, errors }) => {
    return (
        <>
            <h3>Find a table for any occasion</h3>
            <container className="doubleImg">
                <img src="/images/restaurant.jpg" alt="Resturant"/>
                <img src="/images/restaurant%20chef%20B.jpg" alt="Resturant Chef"/>
            </container>

            <label htmlFor="res-date">Choose a Date*</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formValues.date}
                onChange={handleChange}
                required
                style={{border: errors.date ? '2px solid red' : ''}}
            />

            <label htmlFor="res-time">Choose a Time*</label>
            <select
                id="res-time"
                name="time"
                value={formValues.time}
                onChange={handleChange}
                required
                style={{border: errors.time ? '2px solid red' : ''}}
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
                style={{border: errors.guests ? '2px solid red' : ''}}
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
                style={{border: errors.occasion ? '2px solid red' : ''}}
            >
                <option value="" disabled>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>Other</option>
            </select>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <label className="radio-label">
                    Indoor
                </label>
                <input
                    type="radio"
                    name="seating"
                    value="indoor"
                    checked={formValues.seating === "indoor"}
                    onChange={handleChange}
                />
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <label className="radio-label">
                    Outdoor
                </label>
                <input
                    type="radio"
                    name="seating"
                    value="outdoor"
                    checked={formValues.seating === "outdoor"}
                    onChange={handleChange}
                />
            </div>

            <button className="rounded-button" onClick={onNext}>
                Next
            </button>

        </>
    )
}

export default BookingForm1
