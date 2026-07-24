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

        
        
        
        <Card title="">
            <section className="characterList">
                <article className="characterRow">
                    
                    
                    <div className="characterInfo">  
                        <div className="characterPortraitHeader">
                            
                            <h4 className="characterName">John Doe</h4>
                            
                            <div className="characterImg">
                                <img
                                    src={vaultDwellerMale}
                                    alt="Character Image"
                                />
                            </div>
                        </div>
                        <div className="characterMeta">
                            <div className="characterTopItem">
                                <p className="secondaryText characterLevel">Lvl 12</p>
                            </div>
                            
                            <div className="characterTopItem">
                                <p className="secondaryText characterOrigin">Brotherhood Initiate</p>
                            </div>
                            
                            <div className="characterTopItem">
                                <button
                                    type="button"
                                    className="vaultButton characterMenuButton"
                                    aria-label="Open character menu"
                                >
                                    ⋮
                                </button>
                            </div>

                            
                            <div className="specialBlock">
                                <div className="specialLabels">
                                    <span className="statLabel">S</span>
                                    <span className="statLabel">P</span>
                                    <span className="statLabel">E</span>
                                    <span className="statLabel">C</span>
                                    <span className="statLabel">I</span>
                                    <span className="statLabel">A</span>
                                    <span className="statLabel">L</span>
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
                        </div>
                    </div>
                </article>

                <article className="characterRow">
                    
                    
                    <div className="characterInfo">  
                        <div className="characterPortraitHeader">
                            
                            <h4 className="characterName">Jane Doe</h4>
                            
                            <div className="characterImg">
                                <img
                                    src={vaultDwellerFemale}
                                    alt="Character Image"
                                />
                            </div>
                        </div>
                        <div className="characterMeta">
                            <div className="characterTopItem">
                                <p className="secondaryText characterLevel">Lvl 12</p>
                            </div>
                            
                            <div className="characterTopItem">
                                <p className="secondaryText characterOrigin">Brotherhood Initiate</p>
                            </div>
                            
                            <div className="characterTopItem">
                                <button
                                    type="button"
                                    className="vaultButton characterMenuButton"
                                    aria-label="Open character menu"
                                >
                                    ⋮
                                </button>
                            </div>

                            
                            <div className="specialBlock">
                                <div className="specialLabels">
                                    <span className="statLabel">S</span>
                                    <span className="statLabel">P</span>
                                    <span className="statLabel">E</span>
                                    <span className="statLabel">C</span>
                                    <span className="statLabel">I</span>
                                    <span className="statLabel">A</span>
                                    <span className="statLabel">L</span>
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
                        </div>
                    </div>
                </article>
            </section>
        </Card>
        
    </PageLayout>
  );
}

export default CharacterSelectionPage;