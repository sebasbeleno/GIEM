
module.exports = (app, passport, Estudiantes) => {

    var ObjectId = require('mongodb').ObjectId;
    const MongoClient = require('mongodb').MongoClient

    var db

    MongoClient.connect('mongodb+srv://admin:GIEM@giem-4mkhr.mongodb.net/login-node?retryWrites=true&w=majorit', (err, client) => {
        if (err) return console.log(err)
        db = client.db('login-node') // whatever your database name is
    })



    //profile view
    app.get('/panel', isLoggedIn, (req, res) => {
        db.collection('estudiantes').find({ 'estudiantes.psicoEmail': req.user.local.email }).toArray(function (err, results) {

            db.collection('tests').find({ 'test.psicoCorreo': req.user.local.email }).toArray(function (err, test) {

                if (err) console.error(err)

                //console.log(test)

                //console.log(results)
                // send HTML file populated with quotes here
                res.render('panel', {
                    user: req.user,
                    page: req.originalUrl,
                    estudiantes: results,
                    test: test
                });
            })



        })

    });

    // logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/estudiantes', isLoggedIn, (req, res) => {

        db.collection('estudiantes').find({ 'estudiantes.psicoEmail': req.user.local.email }).toArray(function (err, results) {

            if (err) console.error(err)

            //console.log(results)

            res.render('estudiantes', {
                user: req.user,
                page: req.originalUrl,
                estudiantes: results
            });
        })

    })

    app.get('/estudiante', isLoggedIn, (req, res) => {
        db.collection('estudiantes').find({ '_id': ObjectId(req.query.id) }).toArray(function (err, datosEstudiante) {
            if (err) console.error(err)

            console.log(datosEstudiante[0])

            if (datosEstudiante[0].estudiantes.datos) {
                db.collection('tests').find({ 'test.estudianteCorreo': datosEstudiante[0].estudiantes.correo }).toArray(function (err, test) {
                    if (err) console.error(err)

                    var cossas = test[0].test

                    function comparar(a, b) { return a - b; }

                    function sortByValue(jsObj) {
                        var sortedArray = [];
                        for (var i in jsObj) {
                            sortedArray.push([jsObj[i], i]);
                        }
                        return sortedArray.sort(comparar);
                    }

                    var ordenadoPorValor = sortByValue(cossas)
                    //res.json(test)

                    res.render('estudiante', {
                        datosEstudiante: datosEstudiante[0],
                        user: req.user,
                        resultados: ordenadoPorValor
                    })

                   



                })
            }else{
                res.render('estudiante', {
                    datosEstudiante: datosEstudiante[0],
                    user: req.user
                })
            }

        })
    })



}



/** Esto, es un middleware, que nos verifica si es usuario tiene una session abierta
 * en caso de que no, pidrá avanzar normlamente, pero en caso de que no halla inicado sesison
 * lo rederigimos al menú de inicio
 */
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}
