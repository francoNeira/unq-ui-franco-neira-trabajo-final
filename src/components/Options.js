const options = [
  {
    id: 1,
    value: 'piedra',
    winsAgainst: ['lagarto', 'tijera'],
    src: 'https://kristenkriens.com/rock-paper-scissors/dist/images/rock.svg',
  },
  {
    id: 2,
    value: 'papel',
    winsAgainst: ['piedra', 'spock'],
    src: 'https://kristenkriens.com/rock-paper-scissors/dist/images/paper.svg',
  },
  {
    id: 3,
    value: 'tijera',
    winsAgainst: ['papel', 'lagarto'],
    src:
      'https://kristenkriens.com/rock-paper-scissors/dist/images/scissors.svg',
  },
  {
    id: 4,
    value: 'lagarto',
    winsAgainst: ['spock', 'papel'],
    src: 'https://kristenkriens.com/rock-paper-scissors/dist/images/lizard.svg',
  },
  {
    id: 5,
    value: 'spock',
    winsAgainst: ['tijera', 'piedra'],
    src: 'https://kristenkriens.com/rock-paper-scissors/dist/images/spock.svg',
  },
];

export default options;
