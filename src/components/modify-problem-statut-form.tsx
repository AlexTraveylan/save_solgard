"use client"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useToast } from "./ui/use-toast"

const formSchema = z.object({
  statut: z.string(),
  comment: z.string().optional(),
})

// "pending"
// "validated"
// "rejected"

export function ModifyStatutForm({ id_problem, current_statut }: { id_problem: string; current_statut: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      statut: current_statut,
      comment: "",
    },
  })

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    toast({
      description: "Submiting your request ...",
    })

    const response = await fetch(`api/problem/${id_problem}`, {
      method: "PUT",
      body: JSON.stringify(values),
    })
    if (response.ok) {
      toast({
        description: "Statut updated !",
      })
      router.refresh()
    } else {
      toast({
        variant: "destructive",
        description: "Error during statut modification, plz try it later.",
      })
    }
    setIsLoading(false)
  }

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="statut"
              render={({ field }) => (
                <FormItem {...field}>
                  <FormLabel>Statut</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Statut" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">pending</SelectItem>
                        <SelectItem value="validated">validated</SelectItem>
                        <SelectItem value="rejected">rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              Modify statut
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
