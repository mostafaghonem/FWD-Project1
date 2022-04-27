import Joi, { func, string } from 'joi';


function validateEndpoint(img:object){
    let schema = Joi.object({
        name :Joi.string().required(),
        width : Joi.number().required().not(0).positive(),
        height : Joi.number().required().not(0).positive()
    })
    return schema.validate(img);
}

export default validateEndpoint;