interface CardTechProps {
  title: string;
  description: string;
  href: string;
  children: React.ReactNode;
}

export default function CardTech(props: CardTechProps) {
  return (
    <a className="w-full flex justify-between items-center gap-4 max-w-md border border-outline rounded-md p-4 bg-fill-surface hover:bg-fill-surface-hover" href={props.href} target="_blank">
      <div className="flex justify-center items-center w-16 h-16 rounded-md bg-fill-surface-soft">{props.children}</div>
      <div className="w-5/6 flex flex-col justify-between">
        <h5>{props.title}</h5>
        <p className="text-sm text-ink-soft">{props.description}</p>
      </div>
    </a>
  )
}