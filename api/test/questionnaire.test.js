// const _user = require('../service/questionnaireService');
// const AWS = require('aws-sdk');
// const { DynamoDB } = require('aws-sdk');
// AWS.config.update({
//     region:"sa-east-1",
//     endpoint:"https://dynamodb.sa-east-1.amazonaws.com"
// });


// test('Testando login, com user e password', done => {
//     function callback(err,data) {
//         try{
//             expect(data.status).toBe(200);
//             done();
//         } catch (err){
//             done(err);
//         }
//     }
//     _questionnaire.authUser({body:{user:"thiaagomes1@gmail.com",password:"120193Thi*"}},callback);
// });

// test('Testando consulta de usuário', done => {

//     function callback(err,data) {
//         try{
//             expect(data.content.Item.nome.S).toBe("Thiago");
//             done();
//         } catch (err){
//             done(err);
//         }
//     }
//     _questionnaire.getQuestionnaireService({query:{user:"Thiago"},connectionDB:new DynamoDB()},callback);
// });

// test('Testando consulta de eventos por usuario', done => {

//     function callback(err,data) {
//         try{
//             expect(data.status).toBe(200);
//             done();
//         } catch (err){
//             done(err);
//         }
//     }
//     _user.getEventsPerUserService({query:{user:"Thiago"},connectionDB:new DynamoDB()},callback);
// });

// test('Testando registro/update do usuario no dynamodb', done => {

//     function callback(err,data) {
//         try{
//             expect(data.status).toBe(200);
//             done();
//         } catch (err){
//             done(err);
//         }
//     }
//     _user.registerUserService({connectionDB:new DynamoDB(),body:{user:{"pk": {"S": "user#nay"},"sk": {"S": "metadata#nay"},"nome": {"S": "Nayara"},"nickname": {"S": "nay"},"pix": {"S": "yzyzyzyzyz"}}}},callback);
// });