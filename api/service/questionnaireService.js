const _responseFactory = require('../factory/responseFactory');
const _logFactory = require('../factory/logFactory');
const _api = "questionnaireService";
const _questionnaireDAO = require('../dao/questionnaireDAO');
const _questionnaireService = {};
const axios = require('axios');
// const body = 
// {
//     "pk": "01",
//     "sk":"02"
// }; 

_questionnaireService.getQuestionnaire = (req,callback) => {

    let _functionName = "getQuestionnaireService";

    try {
        _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName,uuid:req.uuid});
        _questionnaireDAO.getQuestionnaireDAO({connectionDB:req.connectionDB,uuid:req.uuid},req.query.id)
        .then(data =>{
            callback(undefined, _responseFactory.successResponse(data,_api,_functionName));
        })
        .catch(err =>{
            callback( _responseFactory.errorResponse(err),undefined);
        })    
    } catch (err) {
        err.api = _api;
        err.functionName = _functionName;
        err.uuid = req.uuid;
        callback( _responseFactory.errorResponse(err),undefined);

    }
}

_questionnaireService.registerQuestionnaireService = (req,callback) => {
    let _functionName = "registerQuestionnaireService";
    try{
        _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName});
        _questionnaireDAO.registerQuestionnaireDAO({connectionDB:req.connectionDB,uuid:req.uuid},req.body.user)
        .then(data =>{
            callback(undefined, _responseFactory.successResponse(data,_api,_functionName));
        })
        .catch(err =>{
            callback( _responseFactory.errorResponse(err),undefined);
        });   
    } catch (err) {
        err.api = _api;
        err.functionName = _functionName;
        err.uuid = req.uuid;
        callback( _responseFactory.errorResponse(err),undefined);

    }
}  

_questionnaireService.postQuestionnaireService = (req,callback) => {
    let _functionName = "postQuestionnaireService";
    try {
        _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName,uuid:req.uuid});
        _questionnaireDAO.postQuestionnaireDAO({connectionDB:req.connectionDB,uuid:req.uuid},req.body.questionnaire)
        .then(data =>{
            callback(undefined, _responseFactory.successResponse(data,_api,_functionName));
        })
        .catch(err =>{
            callback( _responseFactory.errorResponse(err),undefined);
        });   
    } catch (err) {
        err.api = _api;
        err.functionName = _functionName;
        err.uuid = req.uuid;
        callback( _responseFactory.errorResponse(err),undefined);

    }
}  
_questionnaireService.deleteQuestionnaireService = (req,callback) => {
    let _functionName = "deleteQuestionnaireService";
    try {
        _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName,uuid:req.uuid});
        _questionnaireDAO.deleteQuestionnaireDAO({connectionDB:req.connectionDB,uuid:req.uuid},req.body.questionnaire)
        .then(data =>{
            callback(undefined, _responseFactory.successResponse(data,_api,_functionName));
        })
        .catch(err =>{
            callback( _responseFactory.errorResponse(err),undefined);
        });   
    } catch (err) {
        err.api = _api;
        err.functionName = _functionName;
        err.uuid = req.uuid;
        callback( _responseFactory.errorResponse(err),undefined);

    }
}  

module.exports = _questionnaireService;

