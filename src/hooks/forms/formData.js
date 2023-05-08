const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
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
    } else if (!form.subject.trim()) {
      errors.subject = "El campo 'Asunto a tratar' es requerido";
    } else if (!form.comments.trim()) {
      errors.comments = "El campo 'Comentarios' es requerido";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments =
        "El campo 'Comentarios' debe tener entre 10 y 255 caracteres";
    }
  
    return errors;
  };

  export { initialForm, validationsForm }