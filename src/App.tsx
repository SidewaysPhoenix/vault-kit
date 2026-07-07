import vaultkitLogo from "./assets/Vault-Kit Logo.svg";
import "./App.css";

function App() {
  return (
    <main className="mainContainer">
      <header className="homeTitle">
        <p className="eyebrow">Vault-Tec welcomes you to</p>

        <div className="logoRow">
          <img
            src={vaultkitLogo}
            className="logo_vault-kit"
            alt="Vault-Kit logo"
          />

          <h1>Vault-Kit</h1>
        </div>

        <p className="subtitle">
          A Fallout 2d20 companion app for characters, gear, creatures, and GM tools.
        </p>
      </header>

      <div className="homeGrid">
        <section className="homeCard">
          <h2>Characters</h2>
          <p>Create and manage player characters.</p>
        </section>

        <section className="homeCard">
          <h2>Compendium</h2>
          <p>Browse weapons, armor, perks, items, and creatures.</p>
        </section>

        <section className="homeCard">
          <h2>GM Tools</h2>
          <p>Prepare NPCs, encounters, loot, and campaign notes.</p>
        </section>
      </div>
    </main>
  );
}

export default App;