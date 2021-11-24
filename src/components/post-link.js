import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
    <header>
      <h2 className="post-title">
      {post.frontmatter.title}
      </h2>
      {/* <div className="post-meta">{post.frontmatter.date}</div> */}
    </header>
  </article>
)
export default PostLink
