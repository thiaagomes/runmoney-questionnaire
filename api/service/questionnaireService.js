const _responseFactory = require('../factory/responseFactory');
const _logFactory = require('../factory/logFactory');
const _api = "questionnaireService";
const _questionnaireDAO = require('../dao/questionnaireDAO');
const { TestWatcher } = require('@jest/core');
const _questionnaireService = {}; 

_questionnaireService.getQuestionnaire = (req,callback) => {
    let _functionName = "getUserService";
    try {
        _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName,uuid:req.uuid});
        console.log(req.query); // Exemplo de utilizacao do get com query string.
        _questionnaireDAO.getQuestionnaireDAO({connectionDB:req.connectionDB,uuid:req.uuid},"pessoa")
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

_questionnaireService.registerUserService = (req,callback) => {
    let _functionName = "registerUserService";
    _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName});
    console.log(req.body);// Exemplo de utilizacao do post, enviado via json.
    callback(undefined, _responseFactory.successResponse("msg de retorno que eu quiser ou obejto",_api,_functionName));
}

_questionnaireService.authUser = (req,callback) => {
    let _functionName = "authUser";
    let body = req.body;
    _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_functionName}`,api:_api,functionName:_functionName});
    if (body.user == "leo.o.roquee@gmail.com" && body.password == "12345")
        callback(undefined, _responseFactory.successResponse("msg de retorno que eu quiser ou obejto",_api,_functionName));
    else 
        callback( _responseFactory.errorResponse("msg de erro de retorno que eu quiser ou obejto",401,_api,_functionName),undefined);

}



module.exports = _questionnaireService;