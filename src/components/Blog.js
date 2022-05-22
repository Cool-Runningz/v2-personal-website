import React, { useEffect, useState} from "react";
import BlogCard from "./BlogCard";

const getFormattedDate = (date) => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(newDate);
};

const renderBlogCards = (posts) => {
  return posts.slice(0, 5).map((post, index) => {
    return (
      <BlogCard
        key={`${index}-${post.slug}`}
        slug={post.slug}
        coverImage={post.coverImage}
        title={post.title}
        brief={post.brief}
        dateAdded={getFormattedDate(post.dateAdded)}
      />
    );
  });
};

const query = `
{
  user(username:"AlyssaCodes") {
    publication {
      posts(page: 0) {
        title
        brief
        slug
        coverImage
        dateAdded
      }
    }
  }
}`

const LoadingCard = () => {
    return (
      <div className="max-w-sm w-full lg:max-w-full lg:flex py-4 mr-4 border border-gray-400 rounded shadow h-48 p-4 mb-8">
        <div className="animate-pulse flex flex-row w-full">
          <div className="basis-1/3">
            <div className="rounded bg-slate-700 h-36 w-72"></div>
          </div>
          <div className="py-2 basis-2/3">
            <div className="h-2 bg-slate-700 rounded mb-8"></div>
            <div className="h-2 bg-slate-700 rounded mb-8"></div>
            <div className="h-2 bg-slate-700 rounded mb-8 w-1/2"></div>
            <div className="h-2 bg-slate-700 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    )
}

const Blog = (props) => {
  const [recentBlogPosts, setRecentBlogPosts] = useState([])
   const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getBlogData = async () => {
      try {
        const response = await fetch("https://api.hashnode.com",
     { //request options
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({ query: query })
        });
        const body = await response.json();
        setRecentBlogPosts(body.data.user.publication.posts)
        setLoading(false)
      }
      catch(error){
        setLoading(false)
        console.error("There was an error fetching blog posts");
      }
    }

    getBlogData()
  },[]);

  return (
      <section id="blog" className="bg-white border-b p-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Recent Blog Posts
          </h2>
          <div className="w-full mb-12">
            <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex justify-center mb-5 p-4 bg-gray-300 border border-gray-800">
            <p className="text-gray-800 text-center text-lg">
              In my blog, I write about Programming 👩🏽‍💻 and Productivity Tips ✔️
              <br />
              <br />
              Feel free to check out a full list of all my blog posts&nbsp;
              <a
                className="font-bold underline"
                href="https://blog.alyssaholland.me/"
              >
                here
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {loading ? Array(3).fill(<LoadingCard />) : renderBlogCards(recentBlogPosts)}
          </div>
        </div>
      </section>
)};

export default Blog;
