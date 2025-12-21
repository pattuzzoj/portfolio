import type { Post } from '@/features/blog/types/blog';
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { isArray } from '@utilify/core';

export default function CardPostResult(props: Post) {
  const tags = props.data.tags.split(",") as string[];

  return (
  <a href={props.data.url} className="w-full flex gap-4 border border-outline p-3 bg-fill-surface hover:bg-fill-surface-hover">
    <div className="w-full relative hidden lg:block">
      <img className='w-full max-h-36 aspect-square object-cover rounded-xl' src={props.data.coverImage} alt="" />
    </div>
    <div className='flex flex-col justify-between gap-2'>
      <div className='flex justify-between items-center'>
        <h2 className='text-sm!'>{props.data.title}</h2>
        <span className="flex items-center text-nowrap w-fit gap-1 text-xs text-ink-on-accent bg-fill-accent rounded-full px-2 py-1">
          {props.data.category}
        </span>
      </div>
      <p className='line-clamp-2 text-sm'>{props.data.summary}</p>
      <div className="flex justify-between items-center">
        {isArray(tags) && (
          <span className='flex items-center gap-1'>
            {tags.map((tag, index) => (
              <span key={index} className="text-xs border border-outline/20 text-ink-on-accent bg-fill-accent/10 rounded-full px-2 py-1">
                {tag}
              </span>
            ))}
          </span>
        )}
        <span className='flex items-center gap-2'>
          <span className="flex items-center gap-1 text-sm text-ink-soft">
            <Clock className='size-4' />{props.data.readingTime}
          </span>
          <span className='flex items-center gap-1 text-sm text-ink-soft'>
            <Calendar className='size-4'/>
            {props.data.date}
          </span>
        </span>
      </div>
    </div>
  </a>
  );
}

