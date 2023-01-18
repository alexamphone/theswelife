import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'posts');

const truncatePostContent = (content: string) => {
  // find first paragraph
  const firstPTagIdx = content.indexOf('<p>');
  const secondPTagIdx = content.indexOf('</p>');
  const paragraphContent = content.slice(firstPTagIdx + 3, secondPTagIdx);
  return paragraphContent.substring(0, paragraphContent.length);
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((filename) => filename.replace(/\.md$/, ''));
};

export const getAllPostsData = () => {
  const files = fs.readdirSync(postsDirectory);

  const postsWithMetaData = files.map((filename) => {
    const id = filename.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(
      `${postsDirectory}/${id}/${filename}.md`
    );
    const matterResult = matter(fileContents);
    const htmlContent = marked(matterResult.content);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      content: truncatePostContent(htmlContent),
    };
  });

  return postsWithMetaData;
};

export const getPostData = (id: string) => {
  const fileContents = fs.readFileSync(`${postsDirectory}/${id}/${id}.md`);
  const matterResult = matter(fileContents);
  const htmlContent = marked(matterResult.content);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    content: htmlContent,
  };
};
