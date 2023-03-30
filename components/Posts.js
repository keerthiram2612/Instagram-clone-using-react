import Post from "./Post"


export default function Posts() {
    const posts=[
        {
            id:"1",
            username: "Keerthi__dog__lover",
            userImg : "https://png.pngtree.com/png-clipart/20200720/original/pngtree-luxury-letter-k-logo-design-png-image_4655196.jpg",
            img:"https://images.unsplash.com/photo-1680120603076-c086ec523217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            caption: "Nice picture"
        },
        {
            id:"2",
            username: "jeni__jerry2611",
            userImg : "https://png.pngtree.com/png-clipart/20200720/original/pngtree-luxury-letter-k-logo-design-png-image_4655196.jpg",
            img:"https://images.unsplash.com/photo-1680017534357-2edd2e803341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            caption: "New picture from my city"
        }
    ]
  return <div>
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
  
  
}
