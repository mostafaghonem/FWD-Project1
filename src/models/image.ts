import Joi, { func, string } from 'joi';


function validateEndpoint(img:object){
    let schema = Joi.object({
        name :Joi.string().required(),
        width : Joi.number().required(),
        height : Joi.number().required()
    })
    return schema.validate(img);
}

export default validateEndpoint;