import { Link } from "react-router";
import "./CharacterSelectionPage.css";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card"

import vaultDwellerMale from "../assets/VaultDwellerMale.png"
import vaultDwellerFemale from "../assets/VaultDwellerFemale.png"

function CharacterSelectionPage() {
  return (
    
    <PageLayout title="Character Selection">
        <div className="characterToolbar">
            <p className="characterPageHint">Select a character to view their details.</p>
            
            <div className="toolbarActions">
                <button className="vaultButton importCharacterButton">
                    Import
                </button>

                <button className="vaultButton createNewCharacterButton">
                    + Create Character
                </button>
            </div>
            
        </div>

        <Card title="Current Characters">
            <section className="characterList">
                <Link to="/characterSheet" className="characterCardLink">
                    <article className="characterRow">
                        
                        <div className="characterInfo">  
                                <div className="characterImg">
                                    <img
                                        src={vaultDwellerMale}
                                        alt="Character Image"
                                    />
                                </div>
                            
                            <div className="characterMeta">
                                <div className="characterNameBar">
                                    <h3 className="characterName">Dallinar Nachtegaele</h3>
                                    <button
                                        type="button"
                                        className="vaultButton characterMenuButton"
                                        aria-label="Open character menu"
                                    >
                                        ⋮
                                    </button>
                                </div>

                                <div className="characterDetails">
                                    <p className="secondaryText characterLevel">Lvl 12</p>
                                    <p className="secondaryText characterBullet">•</p>
                                    <p className="secondaryText characterOrigin">Brotherhood Initiate</p>
                                </div>

                                
                                <div className="specialBlock">
                                    <div className="specialLabels">
                                        <span className="statLabel specialLabel">S</span>
                                        <span className="statLabel specialLabel">P</span>
                                        <span className="statLabel specialLabel">E</span>
                                        <span className="statLabel specialLabel">C</span>
                                        <span className="statLabel specialLabel">I</span>
                                        <span className="statLabel specialLabel">A</span>
                                        <span className="statLabel specialLabel">L</span>
                                    </div>
                            
                                    <div className="specialScores">
                                        <span className="statValue specialValue">6</span>
                                        <span className="statValue specialValue">6</span>
                                        <span className="statValue specialValue">6</span>
                                        <span className="statValue specialValue">5</span>
                                        <span className="statValue specialValue">9</span>
                                        <span className="statValue specialValue">7</span>
                                        <span className="statValue specialValue">4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </Link>

                <article className="characterRow">
                    <div className="characterInfo">  
                            <div className="characterImg">
                                <img
                                    src={vaultDwellerFemale}
                                    alt="Character Image"
                                />
                            </div>
                        
                        <div className="characterMeta">
                            <div className="characterNameBar">
                                <h3 className="characterName">John Doe</h3>
                                <button
                                    type="button"
                                    className="vaultButton characterMenuButton"
                                    aria-label="Open character menu"
                                >
                                    ⋮
                                </button>
                            </div>

                            <div className="characterDetails">
                                <p className="secondaryText characterLevel">Lvl 12</p>
                                <p className="secondaryText characterBullet">•</p>
                                <p className="secondaryText characterOrigin">Brotherhood Initiate</p>
                            </div>

                            
                            <div className="specialBlock">
                                <div className="specialLabels">
                                    <span className="statLabel specialLabel">S</span>
                                    <span className="statLabel specialLabel">P</span>
                                    <span className="statLabel specialLabel">E</span>
                                    <span className="statLabel specialLabel">C</span>
                                    <span className="statLabel specialLabel">I</span>
                                    <span className="statLabel specialLabel">A</span>
                                    <span className="statLabel specialLabel">L</span>
                                </div>
                        
                                <div className="specialScores">
                                    <span className="statValue specialValue">6</span>
                                    <span className="statValue specialValue">6</span>
                                    <span className="statValue specialValue">6</span>
                                    <span className="statValue specialValue">5</span>
                                    <span className="statValue specialValue">9</span>
                                    <span className="statValue specialValue">7</span>
                                    <span className="statValue specialValue">4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </Card>
        
    </PageLayout>
  );
}

export default CharacterSelectionPage;