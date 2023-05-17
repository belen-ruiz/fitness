const initialForm = {
    name: "",
    email: "",
  };

const validationsForm = (form) => {
    const errors = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{10,255}$/;

    if (!form.name.trim()) {
      errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
    } else if (!form.email.trim()) {
      errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())) {
            errors.email = "El campo 'Email' es incorrecto";
    }   
    return errors;
  };

  export { initialForm, validationsForm }