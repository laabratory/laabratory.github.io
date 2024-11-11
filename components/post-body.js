
const PostBody = ({ content, title, date, className }) => {
  return (
    <div className={className}>
      <article className="max-w-2xl mx-auto px-3 mt-4">
				<header>
					<div className="italic opacity-75 mt-10 mb-5">
						<time>{date}</time>
					</div>
					<h1 className="text-8xl w-3/4 font-junicode leading-tight	 mb-10">
						{ title }
					</h1>
				</header>
        <section
          className="prose dark:prose-invert prose-a:text-blue-600 dark:prose-a:text-blue-500 hover:prose-a:text-blue-900 hover:dark:prose-a:text-blue-800 dark:prose-pre:border-gray-900 dark:prose-pre:border"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  )
}

export default PostBody
