import { Link } from "react-router";
import "./CharacterSelectionPage.css";
import PageLayout from "../components/PageLayout";
import Card from "../components/Card"

import vaultDwellerMale from "../assets/VaultDwellerMale.png"
import vaultDwellerFemale from "../assets/VaultDwellerFemale.png"

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
        
        <Card title="">
            <section className="characterList">
                <article className="characterRow">
                    
                    
                    <div className="characterInfo">  
                        <div className="characterPortraitHeader">
                            
                            <h4 className="characterName">Character Name</h4>
                            
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
                        </div>
                    </div>
                </article>

                <article className="characterRow">
                    
                    
                    <div className="characterInfo">  
                        <div className="characterPortraitHeader">
                            
                            <h4 className="characterName">Character Name</h4>
                            
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
                        </div>
                    </div>
                </article>
            </section>
        </Card>
        
    </PageLayout>
  );
}

export default CharacterSelectionPage;