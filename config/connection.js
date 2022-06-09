const { connect, connection } = require('mongoose');

connect('mongodb://localhost/mysocial_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;