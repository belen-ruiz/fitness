const initialForm = {
    name: "",
    email: "",
    password: "",
  };

const newForm = {
    name: "",
    email: "",
    password: "",
  };

const validateForm = (user) => {
    const errors = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{10,255}$/;

    if (!user.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(user.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    } else if (!user.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(user.email.trim())) {
            errors.email = "El campo 'Email' es incorrecto";
    } else if (!regexName.test(user.username.trim())) {
            errors.username = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    }  
    return errors;
  };

  export { initialForm, newForm, validateForm }