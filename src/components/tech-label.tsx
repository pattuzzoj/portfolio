interface TechLabelProps {
  children: React.ReactNode;
}

export default function TechLabel(props: TechLabelProps) {

  return (
    <span className="text-xs border-1 border-slate-700 bg-slate-800 rounded-full px-2 py-1">{props.children}</span>
  )
}