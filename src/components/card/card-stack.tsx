import Image from "next/image";

interface CardStackProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function CardStack(props: CardStackProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 max-w-xs p-6 border-1 border-slate-700 rounded-lg bg-slate-900 text-center">
      <span className="text-blue-400">{props.icon}</span>
      <h4>{props.title}</h4>
      <p className="text-slate-400">{props.description}</p>
    </div>
  )
}