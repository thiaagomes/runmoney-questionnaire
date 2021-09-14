const _questionnaireController = require('../controller/questionnaireController');
const cors = require('cors');
const corsOptions = require('../factory/corsFactory');

module.exports = app => {
    app.route('/api/v1/questionnaire')
    .get(_questionnaireController.getQuestionnaire,cors(corsOptions))
    .put(_questionnaireController.putQuestionnaire,cors(corsOptions))
    .put(_questionnaireController.registerQuestionnaire,cors(corsOptions))
    .delete(_questionnaireController.deleteQuestionnaire,cors(corsOptions))
}
