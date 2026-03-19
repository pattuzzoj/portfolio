import type { Post } from '@/features/blog/types/blog';
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { isArray } from '@utilify/core';

export default function CardPost(props: Post) {
  const tags = props.data.tags.split(",") as string[];

  return (
  <a className="flex flex-col gap-4 max-w-md border border-border p-3 rounded-xl bg-surface hover:bg-hover" href={props.data.url}>
    <div className="w-full relative">
      <img className='w-full max-h-48 aspect-square object-cover rounded-xl' src={props.data.coverImage} alt="" />
      <span className="absolute top-1 right-1 flex items-center gap-1 text-sm text-content-subtle bg-surface-elevated/50 rounded-full px-2 py-1">
        <Clock className='size-4' />{props.data.readingTime}
      </span>
    </div>
    <div className="flex justify-between items-center">
      <strong className='text-xs border border-border bg-accent text-content-inverse rounded-full px-2 py-1'>{props.data.category}</strong>
      <span className='flex items-center gap-1 text-sm text-content-subtle'>
        <Calendar className='size-4'/>
        {props.data.date}
      </span>
    </div>
    <h2 className="text-base!">
      {props.data.title}
    </h2>
    <p className='line-clamp-3'>{props.data.summary}</p>
    {isArray(tags) && (
      <span className='flex items-center gap-1'>
        {tags.map((tag, index) => (
          <span key={index} className="text-xs border border-accent/20 text-content-inverse bg-accent/10 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </span>
    )}
  </a>
  );
}
