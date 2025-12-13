interface CardTechProps {
  title: string;
  description: string;
  href: string;
  children: React.ReactNode;
}

export default function CardTech(props: CardTechProps) {
  return (
    <a className="w-full flex justify-between items-center gap-4 max-w-md border border-slate-700 rounded-md p-4 bg-slate-900 hover:bg-slate-700" href={props.href} target="_blank">
      <div className="flex justify-center items-center w-16 h-16 rounded-md bg-slate-800">{props.children}</div>
      <div className="w-5/6 flex flex-col justify-between">
        <h5>{props.title}</h5>
        <p className="text-sm text-slate-400">{props.description}</p>
      </div>
    </a>
  )
}