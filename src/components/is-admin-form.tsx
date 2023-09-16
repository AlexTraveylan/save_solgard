"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import CryptoJS from "crypto-js"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { InputEye } from "./input-password-eye"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { useToast } from "./ui/use-toast"

const formSchema = z.object({
  admin_password: z.string(),
})

export function IsAdminForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      admin_password: "",
    },
  })

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    toast({
      description: "Checking is you are an admin ...",
    })
    const envSalt = process.env.NEXT_PUBLIC_SUPERMASTERSALT
    if (!envSalt) {
      toast({
        variant: "destructive",
        description: "Environnement errror",
      })
      return setIsLoading(false)
    }
    const response = await fetch("api/isadmin", {
      method: "POST",
      body: JSON.stringify({
        hashed_admin_password: CryptoJS.SHA256(envSalt + values.admin_password).toString(CryptoJS.enc.Hex),
      }),
    })
    if (response.ok) {
      toast({
        description: "Acces granted",
      })
      router.refresh()
    } else {
      toast({
        variant: "destructive",
        description: "Failed",
      })
    }
    setIsLoading(false)
  }

  return (
    <div className="flex m-2 min-h-[80vh] items-center justify-center">
      <Card className="min-w-[350px] w-full max-w-[700px]">
        <CardHeader>
          <CardTitle>Admin acces form</CardTitle>
          <CardDescription>You can ask acces to AlexTraveylan on Discord</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="admin_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Admin password</FormLabel>
                    <FormControl>
                      <InputEye field={field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                Vérifier
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
