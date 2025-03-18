"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {DefaultValues, FieldValues, SubmitHandler, useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {uppercase} from "@/lib/utils";
import Link from "next/link";
import ROUTES from "@/constants/routes";


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(50),
})

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

const AuthForm = <T extends FieldValues>({schema, defaultValues, formType, onSubmit}: AuthFormProps<T>) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })

  // 2. Define a submit handler.
  const handleSubmit: SubmitHandler<T> = async () => {
    // TODO: authenticate user
  };

  const buttonText = formType === "SIGN_IN" ? "Sign in" : "Sign up"

  // 3. Build your form

  return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 space-y-6">
          {Object.keys(defaultValues).map((field) => (
              <FormField
                  key={field}
                  control={form.control}
                  name={field}
                  render={({field}) => (
                      <FormItem className="flex w-full flex-col gap-2.5">
                        <FormLabel
                            className="paragraph-medium text-dark400_light700">{field.name === 'email' ? 'Email Address' : uppercase(field.name)}</FormLabel>
                        <FormControl>
                          <Input required type={field.name === 'password' ? 'password' : 'text'} {...field}
                                 className="paragraph-regular background-light-900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"/>
                        </FormControl>

                        <FormMessage/>
                      </FormItem>
                  )}
              />
          ))}
          <Button disabled={form.formState.isSubmitting}
                  className="primary-gradient paragraph-medium min-g-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900">{
            form.formState.isSubmitting
                ? buttonText === 'Sign in' ? 'Signing In...'
                    : 'Signing Up...' : buttonText}
          </Button>

          {/* TODO: consider extracting this to its own component or helper JS file */}
          {formType === "SIGN_IN"
              ? <p>Don't have an account?{" "}<Link href={ROUTES.SIGN_UP}
                                                    className="paragraph-semibold primary-text-gradient">Sign
                up</Link></p>
              : <p>Already have an account?{" "}<Link href={ROUTES.SIGN_IN}
                                                      className="paragraph-semibold primary-text-gradient">Sign
                in</Link></p>}
        </form>
      </Form>
  )
}

export default AuthForm;
