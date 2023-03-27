import Post from "./Post"


export default function Posts() {
    const posts=[
        {
            id:"1",
            username: "Keerthi__dog__lover",
            userImg : "https://png.pngtree.com/png-clipart/20200720/original/pngtree-luxury-letter-k-logo-design-png-image_4655196.jpg",
            img:"https://images.unsplash.com/photo-1679858511194-8ab47c0449be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
            caption: "Nice picture"
        },
        {
            id:"2",
            username: "jeni__jerry2611",
            userImg : "https://png.pngtree.com/png-clipart/20200720/original/pngtree-luxury-letter-k-logo-design-png-image_4655196.jpg",
            img:"https://images.unsplash.com/photo-1679882069275-1c43fefbe81a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
            caption: "New picture from my city"
        }
    ]
  return ( <div>
    {posts.map(post=>(
       <Post
       key={post.id}
       id={post.id}
       username={post.username}
       userImg={post.userImg}
       img={post.img}
       caption={post.caption}
       />
    ))}
       
    </div>
  )
}
