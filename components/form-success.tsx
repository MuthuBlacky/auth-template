import { FaCheckCircle } from "react-icons/fa"
type FormSuccessProps = {
    message? : string,
}
export const FormSuccess = ({
    message
}:FormSuccessProps)=> {
    if(message == null || message == "") return;
    return <div className="bg-emerald-500/15 p-3 rounded-md flex justify-center items-center gap-x-2 text-sm text-emerald-500">
       <FaCheckCircle className="w-4 h-4"></FaCheckCircle>
       <p>{message}</p>
    </div>
}