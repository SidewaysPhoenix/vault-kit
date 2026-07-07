import "./CharacterSelectionPage.css";

function CharacterSelectionPage() {
  return (
    <main className="mainContainer">
        <div>
        <h1>Character Selection</h1>
        <p>Select a character to view their details.</p>
        </div>
        <div className="characterGrid">
            <section className="characterCard">
                <h2>Character 1</h2>
                <p>Details about Character 1.</p>
            </section>
        </div>
        <div className="characterGrid">
            <section className="characterCard">
                <h2>Character 2</h2>
                <p>Details about Character 2.</p>
            </section>
        </div>
        <div className="characterGrid">
            <section className="characterCard">
                <h2>Character 3</h2>
                <p>Details about Character 3.</p>
            </section>
        </div>
    </main>

  );
}

export default CharacterSelectionPage;