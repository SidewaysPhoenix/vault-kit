import "./Card.css"

type CardHeaderProps = {
    title: string;
    children: React.ReactNode;
};

function Card(props: CardHeaderProps) {
    return (
        <div className="cardMain">
            <h3 className="cardTitle">
                {props.title}
            </h3>
            <section className="cardContentPanel">
                {props.children}
            </section>
        </div>
    );
}

export default Card;