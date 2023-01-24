import Moons from "./Moons";

const Planet = (props) => {
  return (
    <div>
      {props.name}
      {props.moons?.map(moons =>
        <Moons name={moons} />
      )}
    </div>
  );
}

export default Planet;