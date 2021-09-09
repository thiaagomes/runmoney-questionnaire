const _logFactory = require ('./logFactory');
const _responseFactory = {};

_responseFactory.successResponse = (content,api,functionName) => {
    var data = {
        message: 'Processamento realizado com sucesso!',
        success: true,
        status:200,
        content: (!!content) ? content : ''
    }
    _logFactory.generateInfoLog({message: data.message,api: api, functionName: functionName, uuid:content.uuid})
    return data;
}

_responseFactory.errorResponse = (content) => {
    var err = {
        message: 'Ops, algo deu errado no processamento',
        success: false,
        status: (!!content.statusCode) ? content.statusCode : 500,
        content: (!!content) ? content : 'Erro não encontrado na stack, validar tratamento de erro da function',
        stack: content.stack,
        functionName: content.functionName
    }
    _logFactory.generateErrorLog({message: err.stack,api: content.api, functionName: err.functionName, uuid: content.uuid});
return err;
}

module.exports = _responseFactory;