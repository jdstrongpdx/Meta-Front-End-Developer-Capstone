import BookingHeader from "./BookingHeader";

const BookingForm3 = ({formValues, handleSubmit}) => {
    return (
        <>
                <h3>Reservation Confirmation</h3>

                <h4>Please verify your reservation selections:</h4>
                <p><strong>Date:  </strong>{formValues.date}</p>
                <p><strong>Time:  </strong>{formValues.time}</p>
                <p><strong>Diners:  </strong>{formValues.guests}</p>
                <p><strong>Occasion:  </strong>{formValues.occasion}</p>
                <p><strong>Requests:  </strong>{formValues.requests}</p>
                <br/>
                <p><strong>Date:  </strong>{formValues.firstName}</p>
                <p><strong>Date:  </strong>{formValues.lastName}</p>
                <p><strong>Date:  </strong>{formValues.phoneNumber}</p>
                <p><strong>Date:  </strong>{formValues.email}</p>

                <button className="rounded-button" onClick={handleSubmit}>
                        Reserve Table
                </button>
        </>
    )
}

export default BookingForm3;
