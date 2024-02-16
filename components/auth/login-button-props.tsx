"use client"
import { useRouter } from "next/navigation"

type LoginButtonProp = {
    children : React.ReactNode,
    mode? : "modal" | "redirect",
    aschild? : boolean,
}
const LoginButton = ({children , mode = "redirect"} : LoginButtonProp) => {
    const router = useRouter()
    const onClick = ()=> {
        router.push('/auth/login');
    }
    if(mode === "modal"){
        return <span>
            Todo : implement modal
        </span>
    }
   return <span onClick={onClick} className="cursor-pointer">
    {children}
   </span>
}
export default LoginButton;