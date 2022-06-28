export function ChampionCard(props) {
  return (
    <div className="ChampionCard">
      <img src={props.image} alt="Imagem do Campeão" />
      <strong>{props.name}</strong>
    </div>
  );
}
