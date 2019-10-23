module.exports = (app, passport, Estudiantes) => {
  app.get("/",   (req, res) => {
    res.render("index", {
      page: req.urlbr,
      user: req.user
    });
  });

  app.get("/menu",  (req, res) => {
    res.render("menu", {
      page: req.url
    });
  });

  app.get("/decirQuienEs", (req, res) => {
    res.render("decirQuienEs", {
      user: req.user
    })
  })

  app.get("/academica",  (req, res) => {
    res.render("academica", {
      page: req.url
    });
  });

  app.get("/administracion",  (req, res) => {
    res.render("administracion", {
      page: req.url
    });
  });

  app.get("/artes",   (req, res) => {
    res.render("artes", {
      page: req.url
    });
  });

  app.get("/ciencias_matematicas", (req, res) => {
    res.render("ciencias_matematicas", {
      page: req.url
    });
  });

  app.get("/comercial", (req, res) => {
    res.render("comercial", {
      page: req.url
    });
  });

  app.get("/construcciones", (req, res) => {
    res.render("construcciones", {
      page: req.url
    });
  });

  app.get("/contabilidad", (req, res) => {
    res.render("contabilidad", {
      page: req.url
    });
  });

  app.get("/deportes", (req, res) => {
    res.render("deportes", {
      page: req.url
    });
  });

  app.get("/electricidad", (req, res) => {
    res.render("electricidad", {
      page: req.url
    });
  });

  app.get("/electronica", (req, res) => {
    res.render("electronica", {
      page: req.url
    });
  });

  app.get("/gastronomia", (req, res) => {
    res.render("gastronomia", {
      page: req.url
    });
  });

  app.get("/gestion", (req, res) => {
    res.render("gestion", {
      page: req.url
    });
  });

  app.get("/humanidades", (req, res) => {
    res.render("humanidades", {
      page: req.url
    });
  });

  app.get("/industrial", (req, res) => {
    res.render("industrial", {
      page: req.url
    });
  });

  app.get("/madera", (req, res) => {
    res.render("madera", {
      page: req.url
    });
  });

  app.get("/metalisteria", (req, res) => {
    res.render("metalisteria", {
      page: req.url
    });
  });

  app.get("/moda", (req, res) => {
    res.render("moda", {
      page: req.url
    });
  });

  app.get("/musica", (req, res) => {
    res.render("musica", {
      page: req.url
    });
  });

  app.get("/plastica", (req, res) => {
    res.render("plastica", {
      page: req.url
    });
  });

  app.get("/programacion", (req, res) => {
    res.render("programacion", {
      page: req.url
    });
  });

  app.get("/promocion", (req, res) => {
    res.render("promocion", {
		page: req.url
	});
  });

  app.get("/quimica", (req, res) => {
    res.render("quimica", {
      page: req.url
    });
  });




  app.get("/sistemas", (req, res) => {
    res.render("sistemas", {
      page: req.url
    });
  });

  app.get("/login", (req, res) => {
    res.render("login.ejs", {
      /** flash, es el modulo que usamos para mostrar
			 * mensajes flash dentro de la aplicacion, como seria
			 * el 'este usuario no existe'
			 */
      message: req.flash("loginMessage"),
      page: req.originalUrl,
      user: req.user
    });
  });

  app.post("/login", passport.authenticate("local-login", {
      /** En caso de que el todo halla ido bien :D */
      successRedirect: "/panel",
      /** En caso de que halla fallado algo :c */
      failureRedirect: "/login",
      failureFlash: true
    })
  );

  app.post('/loginEStu',  passport.authenticate("estu-login",  {
      successRedirect: "/perfil",
      failureRedirect: "/login",
      failureFlash: true
    })
  );

};

/** Esto, es un middleware, que nos verifica si es usuario tiene una session abierta
 * en caso de que no, pidrá avanzar normlamente, pero en caso de que no halla inicado sesison
 * lo rederigimos al menú de inicio
 */
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}
