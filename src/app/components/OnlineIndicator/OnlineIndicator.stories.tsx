import React from 'react';

import OnlineIndicator from './OnlineIndicator';

export default {
  title: 'Component/OnlineIndicator',
  component: OnlineIndicator,
};

export const Online = (): JSX.Element => <OnlineIndicator />;
export const Offline = (): JSX.Element => <OnlineIndicator />;
