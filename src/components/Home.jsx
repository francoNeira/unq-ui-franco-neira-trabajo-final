import options from './Options.js';
import OptionCard from './OptionCard.jsx';
import { useEffect, useState } from 'react';

const Home = () => {
  const [playerValue, setPlayerValue] = useState(null);
  const [result, setResult] = useState(null);
  const [victories, setVictories] = useState(0);
  const [loses, setLoses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Piedra, papel, tijera, lagarto o Spock';
  }, []);

  const play = () => {
    if (!playerValue) setError('¡No elegiste una opción!');
    else {
      let aiValue = randomValue();
      let result = findResult(aiValue);
      setResult(result);
    }
  };

  const randomValue = () => {
    let values = options.map(option => option.value);
    return values[Math.floor(Math.random() * values.length)];
  };

  const findResult = aiValue => {
    let result = draw(aiValue);
    if (!result)
      return playerWon(aiValue)
        ? updateRecordAndGetMessage(aiValue, 'victory')
        : updateRecordAndGetMessage(aiValue, 'lose');
    return result;
  };

  const draw = aiValue =>
    aiValue === playerValue ? updateRecordAndGetMessage(aiValue, 'draw') : null;

  const updateRecordAndGetMessage = (aiValue, result) => {
    let message;
    switch (result) {
      case 'victory':
        setVictories(victories + 1);
        message = `¡Victoria! Superaste a la computadora porque eligió ${aiValue}.`;
        break;
      case 'lose':
        setLoses(loses + 1);
        message = `¡Derrota! Fuiste vencido porque la computadora eligió ${aiValue}.`;
        break;
      default:
        setDraws(draws + 1);
        message = `¡Empate! Tanto vos como la computadora eligieron ${aiValue}.`;
    }
    return message;
  };

  const playerWon = aiValue => {
    return options
      .find(option => option.value === playerValue)
      .winsAgainst.includes(aiValue);
  };

  const handleClick = (id, value) => {
    setPlayerValue(value);
    if (error) setError(null);
    let ids = options.map(option => option.id);
    ids.forEach(currentId => {
      let grayscale = currentId === id ? 'grayscale(0%)' : 'grayscale(100%)';
      document.getElementById(`op-card-${currentId}`).style.filter = grayscale;
    });
  };

  return (
    <>
      <nav className="navbar-title">
        <h1 className="title">Piedra, Papel, Tijera, Lagarto o Spock</h1>
      </nav>
      <div className="container-fluid home text-center">
        <h2>¡Elegí la opción que más te guste y a jugar!</h2>
        <div className="row row-cols-1 row-cols-md-5">
          {options.map(option => (
            <a
              key={`a-${option.id}`}
              href="#"
              onClick={() => handleClick(option.id, option.value)}
            >
              <OptionCard
                key={`op-card-${option.id}`}
                id={`op-card-${option.id}`}
                src={option.src}
                alt={option.value}
              />
            </a>
          ))}
        </div>
        <button className="play-button" onClick={play}>
          Jugar
        </button>
        <h2 className="error">{error}</h2>
        <h1 className="match-result">{result}</h1>
        <h1>
          {(victories > 0 || draws > 0 || loses > 0) &&
            `Victorias: ${victories} | Empates: ${draws} | Derrotas: ${loses}`}
        </h1>
      </div>
    </>
  );
};

export default Home;
