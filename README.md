This app deploys a REST api that mimics the data output of Looker (currently only set up to mimic a Look with one dimension and a pivot)

Download the repo to your local machine and run npm install then npm start

API runs on port 3001, access data through http://localhost:3001/<datatypehere>. Available JSON objects are data and queryResponse, which are exposed through the Looker custom D3 integration process in the same way.

Currently, there are two data shapes, one at the address http://localhost:3001/dataTwoDimensions and another at http://localhost:3001/dataOnePivot

TODO: Add different data shapes and add ability for developer to customize incoming data
