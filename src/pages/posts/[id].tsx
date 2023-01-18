import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '../../components/hero';

const POST_IMGS_URL =
  'https://the-swe-life.s3.us-west-2.amazonaws.com/post-imgs';

export const getStaticPaths = () => {
  const paths = getAllPostIds();

  return {
    paths: paths.map((path) => {
      return {
        params: {
          id: path,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

const PostPage = ({ postData }) => {
  return (
    <article id="blog-post" className="max-w-xl md:mt-12 mx-auto mb-24">
      <Head>
        <title>{postData.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Hero
          headline={postData.title}
          supporting={`By ${postData.author}`}
          date={postData.date}
          imgURL={`${POST_IMGS_URL}/${postData.id}/featured.png`}
        />
      </header>
      <section className="px-4">
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        <Link href="/">Back to Home</Link>
      </section>
    </article>
  );
};

export default PostPage;
