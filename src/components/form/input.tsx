interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input className="rounded-md border-1 border-slate-600 p-2 bg-slate-800" type="text" {...props} />
  )
}