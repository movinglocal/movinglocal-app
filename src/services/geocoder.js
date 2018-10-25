import fetch from 'unfetch';

const GEOCODER_URL = 'https://geocoder.api.here.com/6.2/geocode.json';

export async function geocode(address) {
  const { HERE_APP_ID, HERE_APP_CODE } = config;
  try {
    const response = await fetch(`${GEOCODER_URL}?app_id=${HERE_APP_ID}&app_code=${HERE_APP_CODE}&country="DEU"&searchtext=${address}&jsonattributes=1`);
    const json = await response.json();
    const {
      latitude, longitude
    } = json.response.view[0].result[0].location.displayPosition;
    return [latitude, longitude];
  } catch (error) {
    console.log(error);
    return { error: true };
  }
}

export default {
  geocode
};
