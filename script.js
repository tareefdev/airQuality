const axios = require("axios");

const cities = [
  "/turkey/samsun/atakum",
  "urkey/erzurum/tashan/",
  "turkey/hatay/antakya/",
  "/turkey/istanbul/uskudar/mthm/",
  "/turkey/istanbul/esenyurt/mthm/"
];

async function getData() {
try {
  const result = await axios("https://api.waqi.info/feed/turkey/samsun/atakum/?token=9009ad858a047debf8be5eb85a93754cedf33fe0");
  const info = {
    //city: result.data.city.geo.name,
  //  pm25: result.data.iaqi.pm25.v,
   // time: result.data.time.s
  };
  console.log(result.data.time);
} catch (error) {
  console.log(error);
}
}

getData();
