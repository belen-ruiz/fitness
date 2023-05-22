const initialForm = {
    email: "",
    password: "",
  };

const validateForm = (user) => {
    const errors = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!user.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(user.email.trim())) {
            errors.email = "El campo 'Email' es incorrecto";
    } 
    return errors;
  };

  export { initialForm, validateForm }