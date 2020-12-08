import OptionCard from '';

const Home = () => {
  const options = [
    { id: 1, value: 'piedra', winsAgainst: ['lagarto', 'tijera'], src: '' },
    { id: 2, value: 'papel', winsAgainst: ['piedra', 'spock'], src: '' },
    { id: 3, value: 'tijera', winsAgainst: ['papel', 'lagarto'], src: '' },
    { id: 4, value: 'lagarto', winsAgainst: ['spock', 'papel'], src: '' },
    { id: 5, value: 'spock', winsAgainst: ['tijera', 'piedra'], src: '' },
  ];

  return (
    <div className="container-fluid d-flex justify-content-center">
      <h1>Piedra, Papel, Tijera, Lagarto o Spock</h1>
      <div className="row row-cols-1 row-cols-md-5">
        {options.map(option => (
          <OptionCard key={option.id} value={option.value} />
        ))}
      </div>
    </div>
  );
};

export default Home;
