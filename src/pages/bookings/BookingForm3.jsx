const BookingForm3 = ({formValues, handleSubmit, onPrevious}) => {
    return (
        <>
            <h3>Reservation Confirmation</h3>

            <h4>Please verify your reservation selections:</h4>
            <p><strong>Date: </strong>{formValues.date}</p>
            <p><strong>Time: </strong>{formValues.time}</p>
            <p><strong>Diners: </strong>{formValues.guests}</p>
            <p><strong>Occasion: </strong>{formValues.occasion ? formValues.occasion : "None"}</p>
            <p><strong>Requests: </strong>{formValues.requests ? formValues.requests : "None"}</p>
            <br/>
            <p><strong>First Name: </strong>{formValues.firstName}</p>
            <p><strong>Last Name: </strong>{formValues.lastName}</p>
            <p><strong>Phone Number: </strong>{formValues.phoneNumber}</p>
            <p><strong>Email: </strong>{formValues.email ? formValues.email : "None"}</p>

            <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
                <button
                    className="rounded-button"
                    onClick={onPrevious}
                    aria-label="Back to Previous Page"
                >
                    Previous Page
                </button>

                <button
                    className="rounded-button"
                    onClick={handleSubmit}
                    aria-label="Reserve a table at the restaurant"
                >
                    Reserve Table
                </button>
            </div>
        </>
    )
}

export default BookingForm3;
