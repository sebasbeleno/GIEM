module.exports = (app, passport, Estudiantes) => {
    //profile view
    app.get('/panel', isLoggedIn, (req, res) => {
        res.render('panel', {
            user: req.user, 
            page: req.originalUrl
        });
    });

    // logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/estudiantes', (req, res) => {
		res.render('estudiantes', {
            user: req.user, 
            page: req.originalUrl
        });
	})

	
	

}

/** Esto, es un middleware, que nos verifica si es usuario tiene una session abierta
 * en caso de que no, pidrá avanzar normlamente, pero en caso de que no halla inicado sesison
 * lo rederigimos al menú de inicio
 */
function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}
