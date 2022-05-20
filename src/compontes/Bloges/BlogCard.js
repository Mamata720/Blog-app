import React from 'react'
import './Blog.css'
// import "/home/mamta/Desktop/blog-app/src/styles/blogstyle.css"

const BlogCard = (props) => {

  return (
  <div>
      <div className="card"><div className="card_style">
        <img className="avtar_img" src={props.data.author_image} />
        <div className="auther_name">{props.data.author}</div>
        <div className="card_title">{props.data.blog_title}</div>
        <div className="blog_content">{props.data.blog_content}</div>
        <img className="blog_image" src={props.data.blog_image} />
        <div className="blog_time">Aug 2021 ∙ 4 min read</div><img className="png" src="Vector.png" />
        <p className="viers">12.4k</p><img className="star_img" src="Vector1.png" />
        <p className="rating">4.3</p></div>

        <div className="icons">
          <img className="socil_img" src="Vector2.png"></img>
          <img className="socil_img1" src="Vector4.png"></img>
          <img className="linkedin"src="link.png"></img>
          <img className="socil_img2" src="mamta.png"></img>
          <img className="socil_img3" src="Vector6.png"></img>
        </div>
      </div>
    </div>

  )
}
export default BlogCard
