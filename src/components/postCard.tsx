import Date from './date';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '../types/posts';

function PostCard({ id, title, author, date, content }: Post) {
  return (
    <div className="relative flex flex-col md:flex-row gap-y-2 md:gap-x-2 w-full md:h-48 p-4 border border-gray-200 shadow-sm">
      <div className="relative md:grow h-40 md:h-full">
        <Image
          src={`https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs/${id}/featured.jpg`}
          alt={`Featured image of blog post: ${title}`}
          objectFit="cover"
          fill
        />
      </div>
      <div className="basis-2/3">
        <h3 className="font-bold leading-5 mt-0 mb-1 ">
          <Link href={`/posts/${id}`}>{title}</Link>
        </h3>
        <p className="text-base text-stone-900 mt-0 mb-1">By {author}</p>
        <p className="text-sm text-stone-800 mt-0 mb-2">
          <Date dateString={date} />
        </p>
        <p className="text-xs text-stone-700 my-0">{content}</p>
      </div>
    </div>
  );
}

export default PostCard;
