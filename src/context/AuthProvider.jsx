import React, { createContext } from 'react';
import { initialForm, validateForm } from "../components/forms/formData.js";



const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(initialForm, validateForm)

    const signUp = (email, password) =>{
        console.log(email, password)
      }
      
    const handleChange = ({target: {name, value}}) => {
        setErrors(validateForm(user));
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      const handleBlur = (e) => {
        e.stopPropagation()
        setErrors(validateForm(user));
        handleChange(e);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(user));
        signUp(user.name, user.email, user.password)
        setUser({
          ...user, user
        });
        console.log(user) 
        setUser(initialForm);
        }


  return (
    <AuthContext.Provider
        value={{
            handleChange,
            handleBlur,
            handleSubmit,

        }}
    >
        { children }
    </AuthContext.Provider>
  )
}
