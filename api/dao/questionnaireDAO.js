// const questionnaireController = require('../controller/questionnaireController');
const _logFactory = require('../factory/logFactory');
const _questionnaireDAO = {};
const _api = "DAO";

_questionnaireDAO.getQuestionnaireDAO = (content,questionnaire) => {
    _questionnaireDAO.content = content;
    _questionnaireDAO.content.functionName = "getQuestionnaireDAO";
    _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_questionnaireDAO.content.functionName}`,api:_api,functionName:_questionnaireDAO.content.functionName,uuid:content.uuid});
    let params = {
        KeyConditionExpression: 'pk = :pk ',
        ExpressionAttributeValues: {
            ':pk': {'S': `questionnaire#${pk}`},
        },
        TableName: 'runmoney'
};
    return new Promise((res,reject) => 
    _questionnaireDAO.content.connectionDB.query(params,(err,data) => {
            if(err){
                err.api = _api;
                err.functionName = _questionnaireDAO.content.functionName;
                err.uuid = _questionnaireDAO.content.uuid;
                return reject(err);
            }
            else {
                _logFactory.generateInfoLog({message:`Processamento realizado com sucesso!`,api:_api,functionName:_questionnaireDAO.content.functionName});
                return res(data);
            }
                
        })
    )
}

_questionnaireDAO.postQuestionnaireDAO = (content,questionnaire) => {
    console.log("Dao")
    console.log(questionnaire) 
    _questionnaireDAO.content = content;
    _questionnaireDAO.content.functionName = "postQuestionnaireDAO";
    _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_questionnaireDAO.content.functionName}`,api:_api,functionName:_questionnaireDAO.content.functionName,uuid:content.uuid});
    let params = {
        Item: questionnaire,
            TableName: 'runmoney'
    };
    return new Promise((res,reject) => 
    _questionnaireDAO.content.connectionDB.putItem(params,(err,data) => {
            if(err){
                err.api = _api;
                err.functionName = _questionnaireDAO.content.functionName;
                err.uuid = _questionnaireDAO.content.uuid;
                return reject(err);
            }
            else {
                _logFactory.generateInfoLog({message:`Processamento realizado com sucesso!`,api:_api,functionName:_questionnaireDAO.content.functionName});
                return res(data);
            }
                
        })
    )
}

_questionnaireDAO.registerQuestionnaireDAO = (content,questionnaire) => {
    _questionnaireDAO.content = content;
    _questionnaireDAO.content.functionName = "registerQuestionnaireDAO";
    _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_questionnaireDAO.content.functionName}`,api:_api,functionName:_questionnaireDAO.content.functionName,uuid:content.uuid});
    let params = {
            Item: questionnaire,
            TableName: 'runmoney'
    };
    return new Promise((res,reject) => 
    _questionnaireDAO.content.connectionDB.putItem(params,(err,data) => {
            if(err){
                err.api = _api;
                err.functionName = _questionnaireDAO.content.functionName;
                err.uuid = _questionnaireDAO.content.uuid;
                return reject(err);
            }
            else {
                _logFactory.generateInfoLog({message:`Processamento realizado com sucesso!`,api:_api,functionName:_questionnaireDAO.content.functionName});
                return res(data);
            }
                
        })
    )
}

_questionnaireDAO.deleteQuestionnaireDAO = (content,questionnaire) => {
    _questionnaireDAO.content = content;
    _questionnaireDAO.content.functionName = "deleteQuestionnaireDAO";
    _logFactory.generateInfoLog({message:`Inicio do processo da funcao ${_questionnaireDAO.content.functionName}`,api:_api,functionName:_questionnaireDAO.content.functionName,uuid:content.uuid});
    let params = {
        TableName: 'runmoney',
        Key:{
            questionnaire,
        }
    };
    // let params = {TableName:"runmoney",Key:{"pk":{S: `questionnaire#${pk}`}}};
    return new Promise((res,reject) => 
    _questionnaireDAO.content.connectionDB.delete(params,(err,data) => {
            if(err){
                err.api = _api;
                err.functionName = _questionnaireDAO.content.functionName;
                err.uuid = _questionnaireDAO.content.uuid;
                return reject(err);
            }
            else {
                _logFactory.generateInfoLog({message:`Processamento realizado com sucesso!`,api:_api,functionName:_questionnaireDAO.content.functionName});
                return res(data);
            }
                
        })
    )
}


module.exports = _questionnaireDAO;