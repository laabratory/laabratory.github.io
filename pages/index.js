import Head from "next/head";
import Navbar from "@/components/navbar";
import { getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHTML";
import Link from "next/link";
import { linkFromSlug } from "@/lib/postHelpers";
import { useState } from "react";
import fuzzysort from "fuzzysort";
import Laabratory from "@/components/laabratory";

export default function Home({ posts }) {
  const mockPost = {
    title: "",
    slug: "",
    date: "3000-11-11", // far, far in the future??
  };

  const [search, setSearch] = useState("");

  const getPostPreview = ({ title, slug, date, preview }, idx) => (
    <div className="border-b-2" key={slug}>
      <div className="flex flex-row gap-2 items-center mb-1">
        <Link className="text-2xl" href={linkFromSlug(slug)}>
          {title}
        </Link>
        <div className="opacity-50">{date}</div>
      </div>
      <div>{preview}</div>
    </div>
  );

  const filteredPosts = search
    ? fuzzysort
        .go(search, posts, {
          keys: ["title", "preview", "tags", "date", "slug", "tags"],
        })
        .map(({ obj }) => obj)
    : posts;
  const postsList = filteredPosts.map(getPostPreview);

  return (
    <>
      <Head>
        <title>laabratory</title>
      </Head>
        <Navbar currentPost={mockPost} posts={[mockPost, ...posts]} />
        <div className="max-w-2xl mx-auto px-3 my-4">
        <div className="italic mt-10 mb-5">
          {" "}
          {/* add space matching the date part of the post pages */}
          &nbsp;
        </div>
        <div className="text-8xl w-full font-junicode">
          <Laabratory />
        </div>
        <div className="mb-8 text-xl italic"></div>
        {
          // This is a place to put our social media links
          /* <div className='font-bold text-xl opacity-75 flex flex-col gap-4'>
          <a
          href="https://www.linkedin.com/in/aagam-dalal/"
          className="flex flex-row gap-2 items-center"
          >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 512 512"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/></svg>
            LinkedIn
          </a>
          <a 
          className="flex flex-row gap-2 items-center"
          href="https://github.com/aadalal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8' fill="currentColor" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/></svg>
            GitHub
          </a>
        </div> */
        }
        <div className="flex flex-col mt-10">
          <input
            className="focus:outline-none text-black bg-black/10 dark:bg-white/10 dark:text-white text-2xl py-1 border-b-2"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {postsList}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "slug", "date", "content", "tags"]);
  const contents = await Promise.all(
    posts.map(({ content }) => markdownToHtml(content))
  )
  const previews = contents.map(
    (content) => content.replace(/<[^>]*>/g, "").substring(0, 140) + "..."
  );
  const postsWithPreview = posts.map(({ content: _, ...post }, index) => ({
    ...post,
    preview: previews[index],
  }));
  return {
    props: {
      posts: postsWithPreview,
    },
  };
}
