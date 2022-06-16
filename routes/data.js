const dataRoutes = (app, fs) => {
  // variables
  const dataPathOne = './data/dataOnePivot.json';
  const dataPathTwo = './data/dataTwoDimensions.json';

  // READ
  app.get('/dataOnePivot', (req, res) => {
    fs.readFile(dataPathOne, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

    app.get('/dataTwoDimensions', (req, res) => {
    fs.readFile(dataPathTwo, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = dataRoutes;
