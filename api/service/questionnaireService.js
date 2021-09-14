const _responseFactory = require('../factory/responseFactory');
const _logFactory = require('../factory/logFactory');
const _api = "questionnaireService";
const _questionnaireDAO = require('../dao/questionnaireDAO');
const { TestWatcher } = require('@jest/core');
const _questionnaireService = {}; 

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

_questionnaireService.putQuestionnaire = (req,callback) => {
    let _functionName = "putQuestionnaireService";
    try {
        _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName,uuid:req.uuid});
        _questionnaireDAO.putQuestionnaireDAO({connectionDB:req.connectionDB,uuid:req.uuid},req.body.user)
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

_questionnaireService.deleteQuestionnaire = (req,callback) => {
    let _functionName = "deleteQuestionnaireService";
    try {
        _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName,uuid:req.uuid});
        _questionnaireDAO.deleteQuestionnaireDAO({connectionDB:req.connectionDB,uuid:req.uuid},req.body.user)
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

// _questionnaireService.authUser = (req,callback) => {
//     let _functionName = "authUser";
//     let body = req.body;
//     _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName});
//     if (body.user == "thiaagomes1@gmail.com" && body.password == "120193Thi*")
//         callback(undefined, _responseFactory.successResponse("msg de retorno que eu quiser ou obejto",_api,_functionName));
//     else 
//         callback( _responseFactory.errorResponse("msg de erro de retorno que eu quiser ou obejto",401,_api,_functionName),undefined);

// }

module.exports = _questionnaireService;



