import { 
    Card,
    CardHeader,
    CardFooter,
    CardDescription,
    CardTitle,
    CardContent
} from "../ui/card";
import BackButton from "./back-button";
import {Header} from "./header";
import Social from "./social-provider";
type CardWrapperProps = {
   children : React.ReactNode,
   headerLabel : string,
   backButtonLabel : string,
   backButtonHref : string,
   showSocialMedia : boolean
}
export const CardWrapper = ({children , headerLabel ,backButtonLabel ,backButtonHref ,showSocialMedia} : CardWrapperProps) => {
   return <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header headerLabel = {headerLabel}/>
        </CardHeader>
        <CardContent>
         {children}
        </CardContent>
        {showSocialMedia && 
            <CardFooter>
               <Social />
            </CardFooter>
        }
        <CardFooter>
           <BackButton backButtonHref={backButtonHref} backButtonLabel={backButtonLabel} />
        </CardFooter>
      </Card>
}