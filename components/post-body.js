
const PostBody = ({ content, title, date, className }) => {
  return (
    <article className={className}>
      <div className="max-w-2xl mx-auto px-3 mt-4">
        <div className="italic opacity-75 mt-10 mb-5">
          {date}
        </div>
        <h1 className="text-8xl w-3/4 font-junicode mb-10">
          { title }
        </h1>
        <article
          className="prose dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-500 hover:prose-a:text-blue-900 hover:dark:prose-a:text-blue-800 dark:prose-pre:border-gray-900 dark:prose-pre:border"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  )
}

export default PostBody