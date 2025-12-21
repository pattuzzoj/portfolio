interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input className="rounded-md border border-outline p-2 bg-fill-surface-soft" type="text" {...props} />
  )
}

