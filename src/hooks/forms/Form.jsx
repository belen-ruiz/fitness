import { useForm } from "./useForm";
import Loader from "../../SongSearch/Loader";
import Message from "../../SongSearch/Message";
import { initialForm, validationsForm } from "./formData";
import { inputs } from "./inputs"
import { useState } from "react";

let styles = {
    fontWeight: "bold",
    color: "#dc3545",
};

export const Form = () => {
  const [value, setValue] = useState()

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
} = useForm(initialForm, validationsForm);
    

    return (
        <div>
            <h2>Formulario de Contacto</h2>
            
            <form onSubmit={handleSubmit}>
              {inputs && 
                inputs.map((input)=> 
                <div key={input.name}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required={input.required}
                      value={value}
                      />
                </div>
                )}
                
                {errors.name && <p>{errors.name}</p>} 
                {errors.email && <p>{errors.email}</p>}
                {errors.subject && <p>{errors.subject}</p>}
                {errors.comments && <p>{errors.comments}</p>}

                <input type="submit" value="Enviar" onClick={handleSubmit} />
            </form>

            {loading && <Loader />}
            {response && (
                <Message msg="Los datos han sido enviados" bgColor="#198754" />
            )}
        </div>
    )
};


// import { useForm } from "./useForm";
// import Loader from "../../SongSearch/Loader";
// import Message from "../../SongSearch/Message";
// import { initialForm, validationsForm } from "./formData";
// import { inputs } from "./inputs"
// import { useState } from "react";

// let styles = {
//     fontWeight: "bold",
//     color: "#dc3545",
// };

// export const Formularios = () => {
//   const [value, setValue] = useState()

//   const {
//     form,
//     errors,
//     loading,
//     response,
//     handleChange,
//     handleBlur,
//     handleSubmit,
// } = useForm(initialForm, validationsForm);
    

//     return (
//         <div>
//             <h2>Formulario de Contacto</h2>
            
//             <form onSubmit={handleSubmit}>
//               {inputs && 
//                 inputs.map((input)=> 
//                     <input
//                       key={input.name}
//                       type={input.type}
//                       name={input.name}
//                       placeholder={input.placeholder}
//                       onBlur={handleBlur}
//                       onChange={handleChange}
//                       required={input.required}
//                       value={value}
//                       />
//                 )}

//                 <textarea
//                     name="comments"
//                     cols="50"
//                     rows="5"
//                     placeholder="Escribe tus comentarios"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     //value={form.comments}
//                     value={value}
//                     required
//                 ></textarea>
                
//                 {errors.name && <p>{errors.name}</p>}
//                 {errors.email && <p>{errors.email}</p>}
//                 {errors.subject && <p>{errors.subject}</p>}
//                 {errors.comments && <p>{errors.comments}</p>}

//                 <input type="submit" value="Enviar" />
//             </form>

//             {loading && <Loader />}
//             {response && (
//                 <Message msg="Los datos han sido enviados" bgColor="#198754" />
//             )}
//         </div>
//     )
// };
