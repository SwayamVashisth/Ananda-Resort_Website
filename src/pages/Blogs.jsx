import React, { useRef } from "react";
import "../components/BlogSection.css";

const blogs = [
  {
    title: "Top 10 Beach Resorts to Visit This Summer",
    date: "October 10, 2025",
    image: "/images/sample.png",
    description:
      "Hey Bro whatsupp!! This is Swayam This side..",
    link: "https:/www.google.co.in"
  },
  {
    title: "How to Plan a Perfect Destination Wedding",
    date: "September 25, 2025",
    image: "/images/room.png",
    description:
      "Everything you need to know about planning a dream wedding at your favorite destination, from budget to decor ideas.",
    link: "https:/www.google.co.in"
  },
  {
    title: "5 Tips for Choosing the Best Hotel Room",
    date: "August 18, 2025",
    image: "/images/sample.png",
    description:
      "Get expert tips on selecting the ideal hotel room that matches your travel needs and budget.",
    link: "https:/www.google.co.in"
  },
   {
    title: "5 Tips for Choosing the Best Hotel Room",
    date: "August 18, 2025",
    image: "/images/sample.png",
    description:
      "Get expert tips on selecting the ideal hotel room that matches your travel needs and budget.",
    link: "https:/www.google.co.in"
  },
  {
    title: "Luxury Escapes: Top Resorts of 2025",
    date: "July 5, 2025",
    image: "/images/room.png",
    description:
      "Explore the top-rated luxury resorts offering world-class amenities and breathtaking experiences.",
    link: "https:/www.google.co.in"
  }
];

export default function BlogSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 400;
    if (direction === "left") scrollRef.current.scrollLeft -= scrollAmount;
    else scrollRef.current.scrollLeft += scrollAmount;
  };

  return (
    <section className="blog-section">
      <h2 className="blog-title">Our Latest Blogs</h2>

      <div className="blog-carousel-container">
        <button className="arrow-btn" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="blog-carousel" ref={scrollRef}>
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-heading">{blog.title}</h3>
                <p className="blog-date">{blog.date}</p>
                <p className="blog-description">{blog.description}</p>
                <a href={blog.link} className="blog-link">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-btn" onClick={() => scroll("right")}>
          
        </button>
      </div>
    </section>
  );
}
