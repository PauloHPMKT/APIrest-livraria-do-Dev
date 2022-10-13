module.exports = {
    httpStatusCode: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDEN: 403,
        NOT_FOUND: 404,
        CONFLICT: 409,
        UNPROCESSABLE_ENTITY: 422,
        INTERNAL_SERVER_ERROR: 500,
        BAD_GATEWAY: 502,
    },  
    throwNewError: {
        DUPLICATED_EMAIL: { name: 'DUPLICATE_EMAIL', code: 409, message: 'E-mail já cadastrado!' },
        //forms field
        EMPTY_FIELD_NAME: { name: 'EMPTY_FIELD_NAME', code: 400, message: 'Campo de Nome está vazio!' },
        EMPTY_FIELD_EMAIL: { name: 'EMPTY_FIEL_EMAIL', code: 400, message: 'Campo de e-mail está vazio!' },
        EMPTY_FIELD_PASSWORD: { name: 'EMPTY_FIELD_PASSWORD', code: 400, message: 'Campo de senha está vazio!' }
    },
    successStatus: {
        CREATED: { name: 'CREATED', code: 201, message: 'registro criado com sucesso!' }
    }
}
