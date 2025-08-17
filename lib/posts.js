import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'categories');

export function getPostPaths() {
  const categories = fs.readdirSync(postsDirectory);
  const paths = [];
  categories.forEach((category) => {
    const categoryPath = path.join(postsDirectory, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      fs.readdirSync(categoryPath).forEach((file) => {
        if (file.endsWith('.md')) {
          const slug = file.replace(/\.md$/, '');
          paths.push({ params: { category, slug } });
        }
      });
    }
  });
  return paths;
}

export async function getPostData(category, slug) {
  const fullPath = path.join(postsDirectory, category, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    category,
    slug,
    contentHtml,
    ...data,
  };
}
