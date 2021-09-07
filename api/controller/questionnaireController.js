// const _userService = require("../service/userService");

module.exports = questionnaireController = () => {
    
    questionnaireController.getUser = (req,resp) => {
        // _userService.getUserService(req,(err,data) => {
        //     if(!!err){
        //         resp.status(err.status).json(err);
        //     } else{
        //         resp.status(data.status).json(data);
        //     }
        // });
        resp.status(200).json("String");
    }

    return questionnaireController;
}