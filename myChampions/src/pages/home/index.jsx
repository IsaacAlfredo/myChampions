import axios from "axios";
import { useState, useEffect } from "react";
import { ChampionCard } from "../../components/ChampionCard";

function Home() {
  const [champion, setChampion] = useState({ name: "" });

  useEffect(() => {
    async function fetchData() {
      const championList = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/12.12.1/data/pt_BR/champion.json"
      );
      setChampion({
        name: championList.data.data.Irelia.name,
      });
    }
    fetchData();
  });

  return (
    <div className="Home">
      <header>
        <h1>Meus campeões</h1>
        <strong>Usuário: Isaac</strong>
      </header>
      <main>
        <section>
          <ChampionCard name={champion.name} image="" />
        </section>
      </main>
    </div>
  );
}

export default Home;
