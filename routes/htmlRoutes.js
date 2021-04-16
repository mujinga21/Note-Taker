// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
const express = require('express')
const path = require('path');
const root = { root: path.join(__dirname, "../public") };
// ROUTING

module.exports = (app) => {
  app.use(express.static(path.join(__dirname, "../public")));
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get('/notes', (req, res) => {
    res.sendFile ('notes.html',root);
  });

  

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
