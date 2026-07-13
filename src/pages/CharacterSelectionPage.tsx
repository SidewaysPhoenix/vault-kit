import { Link } from "react-router";
import "./CharacterSelectionPage.css";
import PageHeader from "../components/PageHeader";



function CharacterSelectionPage() {
  return (
    
    <main className="mainContainer">
        <PageHeader title="Characters" />
        <div>
        <p>Select a character to view their details.</p>
        </div>

        <section className="vaultCard characterCard">
            <div className="characterInfo">
                <h2 className="characterName">Character Name</h2>
                    
                <div className="characterMeta">
                    <p className="secondaryText characterLevel">Lvl 12</p>
                    <p className="secondaryText characterOrigin">Brotherhood Initiate</p>
                </div>
            </div>

            <div className="specialBlock">
                <div className="specialLabels">
                    <span className="statLabel">STR</span>
                    <span className="statLabel">PER</span>
                    <span className="statLabel">END</span>
                    <span className="statLabel">CHA</span>
                    <span className="statLabel">INT</span>
                    <span className="statLabel">AGI</span>
                    <span className="statLabel">LCK</span>
                </div>
            
                <div className="specialScores">
                    <span className="statValue">5</span>
                    <span className="statValue">5</span>
                    <span className="statValue">5</span>
                    <span className="statValue">5</span>
                    <span className="statValue">5</span>
                    <span className="statValue">5</span>
                    <span className="statValue">5</span>
                </div>
            </div>

            <button
                type="button"
                className="vaultIconButton characterMenuButton"
                aria-label="Open character menu"
            >
                ⋮
            </button>
        </section>
    </main>

  );
}

export default CharacterSelectionPage;