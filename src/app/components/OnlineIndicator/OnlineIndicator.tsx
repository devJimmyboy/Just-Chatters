import React, { ReactNode, useEffect } from 'react';
import { useClient } from '../../lib/client';
import classes from './OnlineIndicator.module.css';

type OnlineIndicatorProps = {
  children?: ReactNode;
};
function OnlineIndicator({ children }: OnlineIndicatorProps): JSX.Element {
  const { client } = useClient();
  const online = client !== null;

  return (
    <div className={classes.indicator}>{online ? 'online' : 'offline'}</div>
  );
}

export default OnlineIndicator;
