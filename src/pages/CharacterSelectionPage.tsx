import { useNavigate } from "react-router";
import "./CharacterSelectionPage.css";
import PageHeader from "../components/PageHeader";



function CharacterSelectionPage() {
    const navigate = useNavigate();
  return (
    
    <main className="mainContainer">
        <PageHeader title="Characters" />
        <div>
        <p>Select a character to view their details.</p>
        </div>

        <section className="characterCard">
            <div className="characterInfo">
                <h2 className="characterName">Character Name</h2>
                    
                <div className="characterMeta">
                    <p className="characterLevel">Lvl 1</p>
                    <p className="characterOrigin">Origin</p>
                </div>
            </div>

            <div className="specialBlock">
                <div className="specialLabels">
                    <span>STR</span>
                    <span>PER</span>
                    <span>END</span>
                    <span>CHA</span>
                    <span>INT</span>
                    <span>AGI</span>
                    <span>LCK</span>
                </div>
            
                <div className="specialScores">
                    <span>5</span>
                    <span>5</span>
                    <span>5</span>
                    <span>5</span>
                    <span>5</span>
                    <span>5</span>
                    <span>5</span>
                </div>
            </div>

            <span className="characterMenuButton" role="button" tabIndex={0}>
                ⋮
            </span>

        </section>
    </main>

  );
}

export default CharacterSelectionPage;