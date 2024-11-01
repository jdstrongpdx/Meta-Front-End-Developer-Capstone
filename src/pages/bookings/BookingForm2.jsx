const BookingForm2 = ({ formValues, onChange: handleChange, availableTimes, onNext }) => {
    return (
        <>
                <h3>Sign in to Collect Points</h3>


                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="requests">Special Requests (Optional)</label>
                <textarea
                    id="requests"
                    name="requests"
                    rows="5"
                    cols="30"
                    value={formValues.requests}
                    onChange={handleChange}
                />

                <button onClick={onNext}>
                        Next
                </button>

        </>
    )
}

export default BookingForm2
