const _questionnaireController = require('../controller/questionnaireController');
const cors = require('cors');
const corsOptions = require('../factory/corsFactory');

module.exports = app => {
    app.route('/api/v1/questionnaire')
    .get(_questionnaireController.getUser,cors(corsOptions))
    // .post(_userController.registerUser,cors(corsOptions))
}