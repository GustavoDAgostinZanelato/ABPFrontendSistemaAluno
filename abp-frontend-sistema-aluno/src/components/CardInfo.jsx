export default function CardInfo({titulo, valor}) {
    return(
        <div className="card card--33">
            <div className="card__body">
                <span className="card__badge card__badge--title">{valor}</span>
                <h3 className="card__title">{titulo}</h3>
            </div>
        </div>
    );
}