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
      label:"Password",
      type: "password",
      name: "password",
      placeholder: "Escribe tu contraseña",
      //value:`${form.email}`,
      required: true,
      //error: `${errors.email}`,
      error: "password",
    },
  ];

const inputsSignUp = [
    // {
    //   label:"Usuario",
    //   type: "text",
    //   name: "username",
    //   placeholder: "Escribe tu Usuario",
    //   //value:`${form.name}`,
    //   required: true,
    //   //error: `${errors.name}`,
    //   error: "user",
    // },
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
    {
      label:"Password",
      type: "password",
      name: "password",
      placeholder: "Escribe tu contraseña",
      //value:`${form.email}`,
      required: true,
      //error: `${errors.email}`,
      error: "password",
    },
    // {
    //   label: "Acepto terminos y condiciones",
    //   type: "checkbox",
    //   name: "terms",
    //   required: true,
    // }
  ];
  

  export { inputsSignIn, inputsSignUp }