interface CardContactProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

export default function CardContact(props: CardContactProps) {
  return (
    <div className="flex flex-col lg:flex-row max-lg:items-center max-lg:text-center gap-4">
      <div className="flex justify-center items-center aspect-square h-12 w-12 rounded-md p-2 bg-slate-800">
        {props.icon}
      </div>
      <div>
        <h5>{props.title}</h5>
        <span>{props.content}</span>
      </div>
    </div>
  )
}