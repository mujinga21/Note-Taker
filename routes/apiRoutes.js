
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, etc.

// const tableData = require('../data/tableData');
// const waitListData = require('../data/Data');

// ROUTING
const notesData = []
const express = require("express")
const textData = [{
  title: "Test Title",
  text: "Test text",
}];
module.exports = (app) => {
  // Sets up the Express app to handle data parsing

  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", (req, res) => res.json(notesData));

  // app.get("/api/waitlist", (req, res) => res.json(Data));

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (notesData.length < 5) {
      notesData.push(req.body);
      res.json(true);
      console.log(notesData)
    } else {
      return res.json(false);
    }
    // console.log(req.body);
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", (req, res) => {
    // Empty out the arrays of data
    textData.length = 0;
    // waitListData.length = 0;

    res.json({ ok: true });
  });
};



