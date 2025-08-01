interface SectionProps {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  return (
    <section id={props.id} className="space-y-8 md:space-y-16">
      <div className="space-y-2">
        <h2 className="text-center">{props.title}</h2>
        <h5 className="text-center text-slate-300">{props.description}</h5>
      </div>
      {props.children}
    </section>
  )
}