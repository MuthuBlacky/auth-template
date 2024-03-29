"use client";
import {CardWrapper} from "./card-wrapper";
import {loginSchema} from "@/schemas/index";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({resolver : zodResolver(loginSchema),
  defaultValues : {
    email : "",
    password : "",
  }
  });
  const onSubmit = (values : z.infer<typeof loginSchema>)=>{
    console.log(values);
  }
  return <CardWrapper headerLabel={"Welcome back"} backButtonLabel={"Don't have an account ?"} backButtonHref={"/auth/register"} showSocialMedia={true}>
     <Form {...form}>
      <form 
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6">
        <div className="space-y-4">
        <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormError message=""></FormError>
                  <FormSuccess message="Email verified"></FormSuccess>
                </FormItem>
              )}
            />
        </div>
        <Button className="w-full" type="submit">Login</Button>
      </form>
         </Form>
  </CardWrapper>
}
