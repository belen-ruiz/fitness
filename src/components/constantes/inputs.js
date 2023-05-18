const inputsSignIn = [
    {
      label:"Usuario",
      type: "text",
      name: "user",
      placeholder: "Crea un Usuario",
      //value:`${form.name}`,
      required: true,
      //error: `${errors.name}`,
      error: "user",
    },
    {
      label:"E-mail",
      type: "email",
      name: "emaill",
      placeholder: "Escribe tu email",
      //value:`${form.email}`,
      required: true,
      //error: `${errors.email}`,
      error: "email",
    },
    {
      label: "Acepto terminos y condiciones",
      type: "checkbox",
      name: "terms",
      required: true,
    }
  ];

const inputsSignUp = [
    {
      label:"Usuario",
      type: "text",
      name: "user",
      placeholder: "Escribe tu Usuario",
      //value:`${form.name}`,
      required: true,
      //error: `${errors.name}`,
      error: "user",
    },
    {
      label:"E-mail",
      type: "email",
      name: "email",
      placeholder: "Escribe tu email",
      //value:`${form.email}`,
      required: true,
      //error: `${errors.email}`,
      error: "email",
    },
  ];
  

  export { inputsSignIn, inputsSignUp }