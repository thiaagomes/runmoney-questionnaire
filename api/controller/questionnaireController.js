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


    questionnaireController.postQuestionnaire = (req, resp) => {
        console.log(req.body)
            _questionnaireService.postQuestionnaireService(req,(err,data) => {
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

