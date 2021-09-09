const _questionnaireService = require("../service/questionnaireService");

module.exports = questionnaireController = () => {
    
    questionnaireController.getQuestionnaire = (req,resp) => {
        _questionnaireService.getQuestionnaire(req,(err,data) => {
            if(!!err){
                resp.status(err.status).json(err);
            } else{
                resp.status(data.status).json(data);
            }
        });
        resp.status(200).json("Teste Get");
    }

    questionnaireController.putQuestionnaire = (req, resp) => {
            _questionnaireService.putQuestionnaireService(req,(err,data) => {
            if(!!err){
                resp.status(err.status).json(err);
            } else{
                resp.status(data.status).json(data);
            }
        });

        resp.status(201).json("Teste Put");
    
    } 

    return questionnaireController;
}

