import {useNavigate} from "react-router";
import "./PageHeader.css";

type PageHeaderProps = {
    title: string;
};

function PageHeader(props: PageHeaderProps) {
    const navigate = useNavigate();

    return (
        <header className="pageHeader">
            <button
                className="vaultButton pageBackButton"
                type="button"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <h1 className="pageTitle">{props.title}</h1>

            <div className="pageHeaderRight"></div>
            </header>
        );
    }

    export default PageHeader;