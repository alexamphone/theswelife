import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPostsData } from '../lib/posts';
import Hero from '../components/hero';
import PostCard from '../components/postCard';
import { useEffect, useState } from 'react';
import { Post } from '../types/posts';

type Props = {
  posts: [Post];
};

function HomePage({ posts }: Props) {
  const [clientWidth, setClientWidth] = useState(null);

  useEffect(() => setClientWidth(window.innerWidth), []);

  return (
    <div className="max-w-xl sm:mt-8 md:mt-12 mx-auto mb-24">
      <Head>
        <title>A SWE Life | A Blog About Everything Software Engineering</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Hero
          headline="Welcome to The SWE Life 👋"
          supporting="A Software Engineering Blog"
          imgURL="/images/hero.jpg"
        />
      </header>
      <section className="px-4">
        <h2>Recent Blog Posts</h2>
        <div className="flex flex-col gap-y-2">
          {posts.map((post) => {
            let content = post.content;

            if (clientWidth < 640) {
              content = content.slice(0, 190);
            } else if (clientWidth < 768) {
              content = content.slice(0, 230);
            } else {
              content = content.slice(0, 210);
            }

            content += '...';

            return (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                date={post.date}
                content={content}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPostsData();
  return {
    props: {
      posts: posts.sort((a, b) => b.date.localeCompare(a.date)),
    },
  };
};

export default HomePage;
