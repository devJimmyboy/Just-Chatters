import { LobbyRoom, Server } from 'colyseus';
import { WebSocketTransport } from '@colyseus/ws-transport';
import { Server as HttpServer } from 'http';

const { PORT = 3001 } = process.env as { PORT: number | string };
let port: number;
if (typeof PORT === 'string') port = parseInt(PORT);
else port = PORT;

export const gameServerInit = (server: HttpServer) => {
  const gameServer = new Server({
    transport: new WebSocketTransport({ server }),
  });

  gameServer.define('lobby', LobbyRoom);

  gameServer.listen(port).then(() => {
    console.log(`Listening on http://localhost:${port}`);
  });
};
