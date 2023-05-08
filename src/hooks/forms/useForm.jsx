import { useState } from "react";
//import { helpHttp } from "../../SongSearch/helpHttp.js";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(validateForm(form));
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    e.stopPropagation()
    setErrors(validateForm(form));
    handleChange(e);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    setForm({
      ...form, form
    });
    console.log(form) 
    setForm(initialForm);
    
    //if (Object.keys(errors).length === 0) {
      // setForm({
      //   ...form, form
      // });
      // console.log(form)      

      //setForm(initialForm);
      //setLoading(true);
      //helpHttp()
        // .post("https://formsubmit.co/ajax/jonmircha@gmail.com", {
        //   body: form,
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        // })
        // .then((res) => {
        //   setLoading(false);
        //   setResponse(true);
        //   setForm(initialForm);
        //   setTimeout(() => setResponse(false), 5000);
        // });
    // } else {
    //   return;
    // }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
