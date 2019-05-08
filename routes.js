module.exports = (app, passport) => {

    app.get('/', (req, res  ) => {
        res.render('index');
    }); 


    
    app.get('/academica', (req, res  ) => {
        res.render('academica');
    })


    app.get('/deportes', (req, res  ) => {
        res.render('deportes');
    })

    app.get('/login', (req, res ) => {
		res.render('login.ejs', {
			/** flash, es el modulo que usamos para mostrar
			 * mensajes flash dentro de la aplicacion, como seria
			 * el 'este usuario no existe'
			 */
			message: req.flash('loginMessage')
		});
    })
    
	app.post('/login', passport.authenticate('local-login', {
		/** En caso de que el todo halla ido bien :D */
		successRedirect: '/profile',
		/** En caso de que halla fallado algo :c */
		failureRedirect: '/login',
		failureFlash: true
    }));
    
    
	//profile view
	app.get('/profile', isLoggedIn, (req, res) => {
		res.render('profile', {
            user: req.user
		});
    });
    
    	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});


};

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