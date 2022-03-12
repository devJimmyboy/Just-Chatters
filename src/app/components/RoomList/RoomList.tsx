import { RoomAvailable } from 'colyseus.js';
import React, { useEffect } from 'react';
import { useList } from 'react-use';
import { useClient } from '../../lib/client';

// interface Props {
//   children?: React.ReactNode;
// }

export default function RoomList() {
  const { lobby } = useClient();
  const [allRooms, { filter, push, set }] = useList<RoomAvailable>([]);
  useEffect(() => {
    if (lobby) {
      lobby.onMessage('rooms', (rooms) => {
        set(rooms);
      });
    }
  }, [lobby]);

  return (
    <div>
      {allRooms.map((room, i) => {
        return <div key={i}>{room.roomId}</div>;
      })}
    </div>
  );
}
