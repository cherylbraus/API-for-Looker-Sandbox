const dataRoutes = (app, fs) => {
  // variables
  const dataPathOne = './data/dataOnePivot.json';
  const dataPathTwoPiv = './data/dataTwoPivots.json';
  const dataPathTwo = './data/dataTwoDimensions.json';
  const dataPathColoredBar = './data/dataColoredBar.json';
  const dataPathViolin = './data/dataViolin.json';
  const dataPathSplitViolin = './data/dataSplitViolin.json';
  const dataPathBullet = './data/dataBullet.json';
  const dataPathLineBad = './data/dataLineBad.json';
  const dataPathBarBins = './data/dataBarBins.json';

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

        app.get('/dataTwoPivots', (req, res) => {
    fs.readFile(dataPathTwoPivots, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataColoredBar', (req, res) => {
    fs.readFile(dataPathColoredBar, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataViolin', (req, res) => {
    fs.readFile(dataPathViolin, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataSplitViolin', (req, res) => {
    fs.readFile(dataPathSplitViolin, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataBullet', (req, res) => {
    fs.readFile(dataPathBullet, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataLineBad', (req, res) => {
    fs.readFile(dataPathLineBad, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataBarBins', (req, res) => {
    fs.readFile(dataPathBarBins, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });


};

module.exports = dataRoutes;
