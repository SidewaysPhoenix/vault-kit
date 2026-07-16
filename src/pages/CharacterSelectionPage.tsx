import { Link } from "react-router";
import "./CharacterSelectionPage.css";
import PageLayout from "../components/PageLayout";



function CharacterSelectionPage() {
  return (
    
    <PageLayout title="Characters">
        <div className="characterToolbar">
            <p className="characterPageHint">Select a character to view their details.</p>
            <button className="vaultButton importCharacterButton">
                Import Character
            </button>
        </div>

        
        <button className="vaultButton createNewCharacterButton">
            + Create Character
        </button>

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
                className="vaultButton characterMenuButton"
                aria-label="Open character menu"
            >
                ⋮
            </button>
        </section>
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
                className="vaultButton characterMenuButton"
                aria-label="Open character menu"
            >
                ⋮
            </button>
        </section>
    </PageLayout>
  );
}

export default CharacterSelectionPage;