

function RoundedButton({linkHref, title}) {
    return (
        <>
            <a href={linkHref} className="rounded-button">{title}</a>
        </>
    )
}

export default RoundedButton;
