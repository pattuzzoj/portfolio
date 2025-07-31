interface CardTechProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CardTech(props: CardTechProps) {
  return (
    <div className="w-full flex justify-between items-center gap-4 max-w-md border-1 border-slate-700 rounded-md p-4 bg-slate-900">
      <div className="flex justify-center items-center w-16 h-16 rounded-md bg-slate-800">{props.icon}</div>
      <div className="w-5/6 flex flex-col justify-between">
        <h5>{props.title}</h5>
        <p className="text-sm text-slate-400">{props.description}</p>
      </div>
    </div>
  )
}