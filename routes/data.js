const dataRoutes = (app, fs) => {
  // variables
  const dataPathOne = './data/dataOnePivot.json';
  const dataPathTwoPiv = './data/dataTwoPivots.json';
  const dataPathTwo = './data/dataTwoDimensions.json';
  const dataPathColoredBar = './data/dataColoredBar.json';
  const dataPathViolin = './data/dataViolin.json';
  const dataPathSplitViolin = './data/dataSplitViolin.json';
  const dataPathSplitViolinRegion = './data/dataSplitViolinRegion.json';
  const dataPathBullet = './data/dataBullet.json';
  const dataPathLineBad = './data/dataLineBad.json';
  const dataPathBarBins = './data/dataBarBins.json';
  const dataPathColoredBarTwo = './data/dataColoredBarTwo.json';
  const dataPathGeo = './data/dataGeo.json';
  const dataPathStateAlbers = './data/dataStateAlbers.json';
  const dataPathInteractions = './data/dataInteractions.json';
  const dataPathDivergingBar = './data/dataDivergingBar.json';
  const dataPathTopTextTile = './data/dataTopTextTile.json';
  const dataPathBulletMTD = './data/dataBulletMTD.json';
  const dataPathWeekDay = './data/dataWeekDay.json';
  const dataPathWeekCumulative = './data/dataWeekCumulative.json';


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

  app.get('/dataSplitViolinRegion', (req, res) => {
    fs.readFile(dataPathSplitViolinRegion, 'utf8', (err, data) => {
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

  app.get('/dataColoredBarTwo', (req, res) => {
    fs.readFile(dataPathColoredBarTwo, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataGeo', (req, res) => {
    fs.readFile(dataPathGeo, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataStateAlbers', (req, res) => {
    fs.readFile(dataPathStateAlbers, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataInteractions', (req, res) => {
    fs.readFile(dataPathInteractions, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataDivergingBar', (req, res) => {
    fs.readFile(dataPathDivergingBar, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataTopTextTile', (req, res) => {
    fs.readFile(dataPathTopTextTile, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataBulletMTD', (req, res) => {
    fs.readFile(dataPathBulletMTD, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataWeekDay', (req, res) => {
    fs.readFile(dataPathWeekDay, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataWeekCumulative', (req, res) => {
    fs.readFile(dataPathWeekCumulative, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

};

module.exports = dataRoutes;
