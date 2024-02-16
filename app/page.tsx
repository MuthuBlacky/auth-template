import LoginButton from "@/components/auth/login-button-props";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex justify-center items-center">
      <div>
        <LoginButton>
              <Button>
                  Sign in
                </Button>
          </LoginButton>
      </div>
       
    </main>
  );
}
