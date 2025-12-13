import type { Post } from '@/features/blog/types/blog';
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { isArray } from '@utilify/core';

export default function CardPost(props: Post) {
  const tags = props.data.tags.split(",") as string[];

  return (
  <a href={props.data.url} className="flex flex-col gap-4 max-w-md border border-slate-800 p-3 rounded-xl bg-slate-900 hover:bg-slate-800">
    <div className="w-full relative">
      <img className='w-full max-h-56 aspect-square object-cover rounded-xl' src={props.data.coverImage} alt="" />
      <span className="absolute top-1 right-1 flex items-center gap-1 text-sm text-slate-400 bg-black/30 rounded-full px-2 py-1">
        <Clock className='size-4' />{props.data.readingTime}
      </span>
    </div>
    <div className="flex justify-between items-center">
      <strong className='text-xs border border-slate-700 bg-blue-600 rounded-full px-2 py-1'>{props.data.category}</strong>
      <span className='flex items-center gap-1 text-sm text-slate-400'>
        <Calendar className='size-4'/>
        {props.data.date}
      </span>
    </div>
    <h3>{props.data.title}</h3>
    <p className='line-clamp-3'>{props.data.summary}</p>
    {isArray(tags) && (
      <span className='flex items-center gap-1'>
        {tags.map((tag) => (
          <span className="text-xs border border-slate-700 bg-slate-800 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </span>
    )}
  </a>
  );
}

