export const statusCode = (response) => {
    switch (response.status) {
      case 400:
        return "Preencha os dados obrigatórios";
      case 401:
        return "Usuário não autenticado";
      case 403:
        return "Email já cadastrado";
      case 404:
        return "Usuário não encontrado";
      default:
        return "Ocorreu um erro, tente novamente";
    }
  };

// export function codeErrorMenu (response){
//     switch (response.status){
//         case 400:
//             return "Necessário informar nome e mesa do cliente";
//         default:
//           return "ocorreu um erro";
//     }
// }

export const CreateOrderError = ({status}) => {
  switch (status) {
    case 400:
      return "Preencha os dados obrigatórios";
    case 401:
      return "Usuário não autenticado";
    default:
      return "Ocorreu um erro, tente novamente";
  }
};