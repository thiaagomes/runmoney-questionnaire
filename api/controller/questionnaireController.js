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
    }


    questionnaireController.putQuestionnaire = (req, resp) => {
            _questionnaireService.putQuestionnaireService(req,(err,data) => {
            if(!!err){
                resp.status(err.status).json(err);
            } else{
                resp.status(data.status).json(data);
            }
        });
    
    } 

    questionnaireController.registerQuestionnaire = (req,resp) => {
        _userService.registerQuestionnaireService(req,(err,data) => {
            if(!!err){
                resp.status(err.status).json(err);
            } else{
                resp.status(data.status).json(data);
            }
        });
    }

    questionnaireController.deleteQuestionnaire = (req, resp) => {
        _questionnaireService.deleteQuestionnaireService(req,(err,data) => {
        if(!!err){
            resp.status(err.status).json(err);
        } else{
            resp.status(data.status).json(data);
        }
    });

    } 
    
    return questionnaireController;
}

