import Link from "next/link";
import { DarkModeSwitch } from "./darkmode-switch";

export default function Navbar({
  currentPost,
  posts,
  style
}) {
  let loc = posts.map(post => post.slug).indexOf(currentPost.slug)
  loc = loc === -1 ? 0 : loc
  
  const postToLink = post => <a href={`/${post.slug}`} key={post.slug} className="opacity-75">{post.title}</a>

  let previous = posts.slice(0, loc).map(postToLink)
  let next = posts.slice(loc + 1).map(postToLink)

  return <div style={{ ...style }} className="full grid grid-cols-8 font-medium">
    <div className="col-span-3 md:col-span-2 p-4 border-2 flex flex-row justify-between items-center flex-shrink">
      <Link className="font-bold text-xl" href="/">aadalal</Link>
      <DarkModeSwitch/>
    </div>
    <div className="col-span-5 md:col-span-6 py-4 px-2 border-y-2 border-r-2 grid grid-cols-16 gap-6 overflow-hidden whitespace-nowrap flex items-center justify-center">
      <div className="col-span-5 md:col-span-6 flex justify-end items-center flex-shrink gap-5">
        { previous }
      </div>
      <div className="col-span-6 md:col-span-4 flex flex-row justify-between items-center flex-shrink-0">
        <Link
        id="previous-post"
        href={posts[loc - 1]?.slug || "#"}
        className={posts[loc - 1] ? "" : "opacity-50 cursor-not-allowed"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8" fill="currentColor" viewBox="144 64 224 384"><path d="M368 64L144 256l224 192V64z"/></svg>
        </Link>
        <div
        className="shrink text-2xl font-junicode"
        >
          { currentPost.title }
        </div>
        <Link 
        id="next-post"
        href={posts[loc + 1]?.slug || "#"}
        className={posts[loc + 1] ? "" : "opacity-50 cursor-not-allowed dark:text-white"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-8 dark:text-white" viewBox="144 64 224 384"><path d="M144 448l224-192L144 64v384z"/></svg>
        </Link>
      </div>
      <div className="col-span-5 md:col-span-6 flex justify-start items-center flex-shrink gap-5">
        { next }
      </div>
    </div>
  </div>
}