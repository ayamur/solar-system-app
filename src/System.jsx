import Planet from "./Planet";

const System = (props) => {
  return (
    <div>
      {props.name}
      <Planet name='Mercury' moons={['none']} />
      <Planet name='Venus' moons={['none']} />
      <Planet name='Earth' moons={['the Moon']} />
      <Planet name='Mars' moons={['Phobos', 'Deimos']} />
      <Planet name='Jupiter' moons={['Ganymede', 'Europa', 'Adrastea', 'Io', 'and many more for a total of 80 confirmed moons']} />
      <Planet name='Saturn' moons={['Titan', 'Enceladus', 'Mimas', 'Dione', 'and many more for a total of 63 confirmed moons']} />
      <Planet name='Uranus' moons={['Oberon', 'Caliban', 'Stephano', 'Francisco', 'and more for a total of 27 confirmed moons']} />
      <Planet name='Neptune' moons={['Naiad', 'Triton', 'Nereid', 'Proteus', 'and more for a total of 14 confirmed moons']} />
      <Planet name='Pluto...is a planet in my heart, fight me.' moons={['Styx', 'Nix', 'Kerberos', 'Hydra', 'Charon']} />
    </div>
  );
}

export default System;