import { useEffect, useState } from "react";

interface SteamGame {
  appid: number;
  name: string;
}

export default function SteamAPI() {
  const [games, setGames] = useState<SteamGame | null>(null);

  useEffect(() => {
    fetch("/.netlify/functions/steam")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data.response.games[0]);
      });
  }, []);

  return (
    <div>
      {games ? (
        <>
          <img
            className="w-40 rounded-2xl object-cover"
            src={`https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${games.appid}/library_600x900.jpg`}
            alt={games.name}
          />
        </>
      ) : (
        <p>Dati non trovati</p>
      )}
    </div>
  );
}
