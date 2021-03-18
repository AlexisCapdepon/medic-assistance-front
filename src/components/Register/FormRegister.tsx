import useForm from '../../utils/useForm';
import validate from "./validateRegisterinfo"
import '../../styles/register.scss'
export interface FormRegisterProps {
  submitForm: any
}

const FormRegister: React.FC<FormRegisterProps> = ({ submitForm }) => {
  
  const { handleChange,handleSubmit, values, errors } = useForm(validate, submitForm)
  
  return (
    <div>
      <h1>Sign up</h1> 
       <div className="form-content-right">
         <form className="form" onSubmit={handleSubmit}>
           <h1>test form</h1>
            <div className="form-input">
              <label htmlFor="username" className="form-label">
                User Name : 
              </label>
              <input 
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter you're username"
                value={values.username}
                onChange={handleChange}
                />
              { errors.username && <p>{errors.username}</p> }
              
            </div>
            <div className="form-input">
              <label htmlFor="email" className="form-label">
               Email : 
              </label>
              <input 
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter you're email"
                value={values.email}
                onChange={handleChange}
                />
              { errors.email && <p>{errors.email}</p> }
            </div>
            <div className="form-input">
              <label htmlFor="password" className="form-label">
               Password : 
              </label>
              <input 
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                />
              { errors.password && <p>{errors.password}</p> }
            </div>
            <div className="form-input">
              <label htmlFor="password2" className="form-label">
               confirm password : 
              </label>
              <input 
                id="password2"
                type="password"
                name="password2"
                className="form-input"
                placeholder="comfirm you'r password"
                value={values.password2}
                onChange={handleChange}
                />
              { errors.password2 && <p>{errors.password2}</p> }
            </div>
            <button className="form-input-btn" type="submit">Sign Up</button>
            
            <span className="form-input-login">Already an account ? login <a href="#">here</a></span>
         </form>
       </div>
    </div>
  );
}
 
export default FormRegister;