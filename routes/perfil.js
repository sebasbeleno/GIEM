module.exports = (app, passport, Estudiantes) => {
    
    
    app.get("/perfil", isLoggedIn, (req, res) => {
      console.log("Tengo en la db, ", req.user)
      res.render("profile", {
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

  