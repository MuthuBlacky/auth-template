"use client";
import Link from "next/link";
import { Button } from "../ui/button";

type BackButtonProps = {
    backButtonLabel : string,
    backButtonHref : string,
}
const BackButton = ({backButtonLabel , backButtonHref} : BackButtonProps)=>{
   return <div className="w-full text-center">
        <Button variant={"link"}
        className="font-normal"
        size={"sm"}
        >
            <Link href={backButtonHref}>
                {backButtonLabel}
            </Link>
        </Button>
   </div>
}
export default BackButton;