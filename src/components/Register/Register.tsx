import { useState } from "react";
import FormRegister from "./FormRegister"
import FormSuccess from "./FormSucess"

export interface FormProps {

}
 
const Form: React.FC <FormProps> = () => {
  const [isSubmitted, setIsSubmitted ] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? ( <FormRegister submitForm={submitForm} /> ) : ( <FormSuccess /> )}
    </div>
    );
}
 
export default Form;