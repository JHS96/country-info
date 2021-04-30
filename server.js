// custom server similar to the “next” binary command.
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // custom route to existing page "/details". Query params mapped as well.
    server.get('/d/:name', (req, res) => {
      const actualPage = '/details';
      const queryParams = { name: req.params.name };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });