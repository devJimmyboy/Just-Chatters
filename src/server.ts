import { createServer } from 'http';
import express from 'express';
import router from './lib/router';
import path from 'path';
import { gameServerInit } from './lib/gameServer';

const app = express();
const server = createServer(app);

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  if (process.env.NODE_ENV === 'development')
    res.redirect('http://localhost:3000');
  else res.sendFile(path.join(__dirname, 'app/index.html'));
});

gameServerInit(server);
