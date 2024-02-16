import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
    subsets : ["latin"],
    weight :  "600",
});
type HeaderProps = {
    headerLabel : string,
}
export const Header = ({headerLabel} : HeaderProps) => {
   return <div className="flex flex-col justify-center items-center w-full h-full gap-y-4">
        <h1 className={cn("font-semibold text-3xl",font.className)}>
            🔐 Auth
        </h1>
        <p className="text-muted-foreground text-sm">{headerLabel}</p>
    </div>
}