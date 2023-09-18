"use client"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Textarea } from "./ui/textarea"
import { useToast } from "./ui/use-toast"

const formSchema = z.object({
  title: z.string(),
  content: z.string(),
  author: z.string().optional(),
})

export function RequestProblemForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      author: "",
    },
  })

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    toast({
      description: "Submiting your request ...",
    })

    const response = await fetch("api/problem", {
      method: "POST",
      body: JSON.stringify(values),
    })
    if (response.ok) {
      toast({
        description: "Problem submited ...",
      })
      router.refresh()
    } else {
      toast({
        variant: "destructive",
        description: "Error submiting your problem, plz try it later.",
      })
    }
    setIsLoading(false)
  }

  return (
    <Card className="min-w-[350px] w-full max-w-[700px]">
      <CardHeader>
        <CardTitle>Submit a problem</CardTitle>
        <CardDescription>If you've found a breach in the game, describe it.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Describe the breach :</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={15} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author (not required)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
