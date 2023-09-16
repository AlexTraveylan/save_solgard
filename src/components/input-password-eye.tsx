import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ControllerRenderProps, Path } from "react-hook-form"
import { Eye, EyeOff } from "../../node_modules/lucide-react"

export function InputEye<TField extends Record<string, any>>({ field }: { field: ControllerRenderProps<TField, Path<TField>> }) {
  const [isShowPassword, setIsShowPassword] = useState(false)

  return (
    <div className="relative">
      <Input type={isShowPassword ? "text" : "password"} {...field} className="pr-10" />
      <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
        {isShowPassword ? <Eye strokeWidth={1.3} size={23} /> : <EyeOff strokeWidth={1.3} size={23} />}
      </span>
    </div>
  )
}
