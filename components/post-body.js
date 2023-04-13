
const PostBody = ({ content, title, date }) => {
  return (
    <div className="max-w-2xl mx-auto px-3 mt-4">
      <div className="my-10">
        <div className="text-8xl w-3/4 font-junicode">
          { title }
        </div>
        <span className="italic opacity-75">
          {date}
        </span>
      </div>
      <article
        className="prose prose-a:text-blue-600 hover:prose-a:text-blue-500"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody