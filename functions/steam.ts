export async function handler() {
  const apiKey = process.env.STEAM_KEY;
  const steamId = process.env.STEAM_ID;

  console.log("KEY:", apiKey ? "presente" : "manca");
  console.log("ID:", steamId);

  const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamId}&format=json`;

  console.log("URL:", url);

  const response = await fetch(url);

  console.log("STATUS:", response.status);
  console.log("TYPE:", response.headers.get("content-type"));

  const text = await response.text();

  console.log("RISPOSTA:", text);

  return {
    statusCode: 200,
    body: text,
  };
}
