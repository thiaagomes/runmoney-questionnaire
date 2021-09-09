const {v4: uuidv4} = require('uuid');
module.exports = () => (req,res,next) => {
    //inclui a conexao na requisicao para uso.
    req.uuid = uuidv4();
    // passa para o proximo middleware
    next();
}