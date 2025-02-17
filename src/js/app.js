import GameSavingLoader from './GameSavingLoader';

const test = new GameSavingLoader();

try {
  const load = await test.load();
  console.log(load);
}
catch(error) {
  console.log(error);
}

