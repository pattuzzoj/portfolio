interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input className="rounded-md border border-border p-2 bg-surface-subtle" type="text" {...props} />
  )
}

