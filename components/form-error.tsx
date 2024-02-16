import { FaExclamationTriangle } from "react-icons/fa"
type FormErrorProps = {
    message? : string,
}
export const FormError = ({
    message
}:FormErrorProps)=> {
    if(message == null || message == "") return;
    return <div className="bg-destructive/15 p-3 rounded-md flex justify-center items-center gap-x-2 text-sm text-destructive">
       <FaExclamationTriangle className="w-4 h-4"></FaExclamationTriangle>
       <p>{message}</p>
    </div>
} 