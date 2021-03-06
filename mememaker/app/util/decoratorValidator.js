const decoratorValidator = (fn, schema, argsType) => {
  return async function (event) {
    const item = event[argsType];
    const data = argsType === "body" ? JSON.parse(item) : item;
    //abortEarly = mostrar todos os erros de uma vez
    const { error, value } = await schema.validate(data, { abortEarly: false });

    //isso faz alterar a instancia de arguments, pois agora os itens estarão parseados
    //pelo JSON.parse, não precisando converter eles mais tarde
    event[argsType] = value;
    //arguments serve para pegar todos os argumentos que vieram na função
    //e manda todos eles pra frente
    //o apply vai retornar a função que será executada posteriormente
    if (!error) return fn.apply(this, arguments);

    return {
      statusCode: 422, //unprocessable entity,
      body: error.message,
    };
  };
};

module.exports = decoratorValidator;
