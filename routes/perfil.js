module.exports = (app, passport, Estudiantes) => {
    
    
    app.get("/perfil", (req, res) => {
      console.log(req.Estudiantes)
      res.render("test/profile", {
        page: req.url,
        user: req.estudiantes 
      });
    });
  

};


function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}

  