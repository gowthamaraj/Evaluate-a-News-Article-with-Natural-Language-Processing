var AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//'https://www.thehindu.com/news/cities/Coimbatore/animals-for-adoption-in-coimbatore/article31632016.ece'
  

function validate(req, res, next) {
    if(!req.body.url) {
      console.log('Invalid Input');
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function PostHandler(req, res) {

    textapi.sentiment({
      'url': req.body.url
    }, function(error, response) {
        res.send(response);
        console.log(response);
    }); 
}

exports.PostHandler = PostHandler;
exports.validate = validate;