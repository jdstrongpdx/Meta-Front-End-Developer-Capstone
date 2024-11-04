const BookingForm2 = ({ formValues, onChange: handleChange, errors, onNext }) => {
    return (
        <>
            <h3>Sign in to Collect Points</h3>

            <label htmlFor="firstName">First Name*</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                required
                aria-invalid={!!errors.firstName} // Indicates an error state
                style={{ border: errors.firstName ? '2px solid red' : '' }}
            />

            <label htmlFor="lastName">Last Name*</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                required
                aria-invalid={!!errors.lastName} // Indicates an error state
                style={{ border: errors.lastName ? '2px solid red' : '' }}
            />

            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                required
                aria-invalid={!!errors.phoneNumber} // Indicates an error state
                style={{ border: errors.phoneNumber ? '2px solid red' : '' }}
            />

            <p>Enter an email and password to save your preferences.</p>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={!!errors.email} // Indicates an error state if relevant
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                aria-required="true" // Indicates that this field is required
            />

            <label htmlFor="requests">Special Requests (Optional)</label>
            <textarea
                id="requests"
                name="requests"
                rows="5"
                cols="30"
                value={formValues.requests}
                onChange={handleChange}
                aria-label="Special Requests" // Describes the purpose of the textarea
                style={{ width: '98%' }}
            />

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

export default BookingForm2;
