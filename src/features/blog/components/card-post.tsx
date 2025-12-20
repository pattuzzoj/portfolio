import type { Post } from '@/features/blog/types/blog';
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { isArray } from '@utilify/core';

export default function CardPost(props: Post) {
  const tags = props.data.tags.split(",") as string[];

  return (
  <article className="flex flex-col gap-4 max-w-md border border-slate-800 p-3 rounded-xl bg-slate-900 hover:bg-slate-800">
    <a href={props.data.url} className="w-full relative">
      <img className='w-full max-h-48 aspect-square object-cover rounded-xl' src={props.data.coverImage} alt="" />
      <span className="absolute top-1 right-1 flex items-center gap-1 text-sm text-slate-400 bg-black/30 rounded-full px-2 py-1">
        <Clock className='size-4' />{props.data.readingTime}
      </span>
    </a>
    <div className="flex justify-between items-center">
      <strong className='text-xs border border-slate-700 bg-blue-600 rounded-full px-2 py-1'>{props.data.category}</strong>
      <span className='flex items-center gap-1 text-sm text-slate-400'>
        <Calendar className='size-4'/>
        {props.data.date}
      </span>
    </div>
    <h2 className="text-base!">
      <a href={props.data.url}>
        {props.data.title}
      </a>
    </h2>
    <p className='line-clamp-3'>{props.data.summary}</p>
    {isArray(tags) && (
      <span className='flex items-center gap-1'>
        {tags.map((tag, index) => (
          <span key={index} className="text-xs border border-blue-400/20 text-blue-400 bg-blue-400/10 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </span>
    )}
  </article>
  );
}

