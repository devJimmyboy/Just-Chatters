import * as Colyseus from 'colyseus.js';
import React, { ReactNode, useEffect } from 'react';

interface ClientCtx {
  client: Colyseus.Client | null;
  lobby: Colyseus.Room | null;
}

const ClientContext = React.createContext<ClientCtx>({
  client: null,
  lobby: null,
});

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  const [client] = React.useState<Colyseus.Client>(
    new Colyseus.Client('ws://localhost:3001')
  );
  const [lobby, setLobby] = React.useState<Colyseus.Room | null>(null);
  useEffect(() => {
    async function joinLobby() {
      const lobby = await client.joinOrCreate('lobby');
      setLobby(lobby);
    }
    joinLobby();
  }, [client]);

  return (
    <ClientContext.Provider value={{ client, lobby }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const context = React.useContext(ClientContext);
  return context;
};
