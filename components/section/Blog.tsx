import React from "react";
import FadeIn from "../motion/FadeIn";
import { client } from "@/lib/microCSMclient";
import { BlogType } from "@/interface/interface";

const Blog = async () => {
  const blogs = await client
    .get({
      endpoint: "blogs",
    })
    .then((res) => {
      return res.contents;
    });

    console.log(blogs);

  return (
    <section id="about" className="section-container">
      <FadeIn>
        <h2 className="text-title mb-8 pt-8 md:pt-0">This is Blog Section</h2>
        <h3>
          {blogs.map((blog: BlogType) => (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
            </div>
          ))}
        </h3>
      </FadeIn>
    </section>
  );
};

export default Blog;
