
const PostBody = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <article
        className="prose prose-a:text-blue-600 hover:prose-a:text-blue-500"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody