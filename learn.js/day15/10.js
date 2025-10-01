const delay = (ms) => new Promise((resolve) => setTimeout(resolve, 5000);
const getSunIcon = async () => {
  await delay(1000);
  return "🌞";
};
const sun = getSunIcon();
console.log(sun);

const getWaveIcon = async () => {
  await delay(1000);
  return "🌊";
};
const getCloudIcon = async () => {
  await delay(1000);
  return "☁";
};
const getAllWetherIcons = () => {
  getSunIcon().then((sun) => {
    return getWaveIcon().then((wave) => {
      return getCloudIcon().then((Cloud) => {
        console.log(sun, wave, cloud);
      });
    });
  });
};

const getAllWetherIconsAsync = async () => {
  console.time();

  const sunPromise = getSunIcon();
  const wavePromise = getWaveIcon();
  const cloudPromise = getCloudIcon();

  const sun = await sunPromise;
  const wave = await wavePromise;
  const cloud = await cloudPromise;
  console.log(sun, wave, cloud);
  console.timeEnd();
};
getAllWetherIconsAsync();


const getAllWetherIconsAsyncs = async () => {
  console.time();
  const [sun, wave, cloud] = await Promise.all([getSunIcon(), getWaveIcon(), getCloudIcon()]);

  console.log(sun, wave, cloud);
  console.timeEnd();
};
getAllWetherIconsAsyncs();
console.log("hello");