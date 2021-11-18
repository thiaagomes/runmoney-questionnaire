const AWS = require('aws-sdk');
module.exports = () => (req,res,next) => {
    AWS.config.update({
        region:"sa-east-1",
        endpoint:"https://dynamodb.sa-east-1.amazonaws.com"
    });
    //inclui a conexao na requisicao para uso.
    req.connectionDB = new AWS.DynamoDB.DocumentClient();
    // passa para o proximo middleware
    next();
}