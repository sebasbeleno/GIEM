module.exports = (app, passport, Estudiantes) => {
  app.get("/test", (req, res) => {
    res.render("test", {
      page: req.url
    });
  });

  app.post("/test", (req, res) => {
    console.log(req.body)
    res.send(req.body.p2)
  });
};
