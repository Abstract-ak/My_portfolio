import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaBlog,
  FaLinkedin,
  FaHeart,
  FaComment,
  FaShare,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/carousel.css";

const Blog = () => {
  const content = {
    blogs: [
      {
        title: "10 Backend Concepts Every Frontend Developer Should Know",
        date: "January 27, 2024",
        description:
          "A comprehensive guide to essential backend concepts that frontend developers should understand to become more effective full-stack developers. Covers RESTful APIs, Authentication, Databases, Security, and more.",
        link: "https://github.com/Abstract-ak/My_portfolio/blob/main/src/blogs/backend-concepts.mdx",
        tags: ["Backend", "Web Development", "Programming", "Full Stack"],
        image: "https://placehold.co/600x400/png",
      },
      {
        title: "Understanding Modern Web Development",
        date: "January 2024",
        description:
          "Modern web development has evolved significantly, embracing new technologies, methodologies, and best practices. Let's explore the key aspects that define contemporary web development.",
        link: "https://github.com/Abstract-ak/My_portfolio/blob/main/src/blogs/modern-web-development.mdx",
        tags: ["Web Development", "Technology", "Frontend", "Backend"],
        image: "https://placehold.co/600x400/png",
      },
      // {
      //   title: "The Impact of AI in Software Development",
      //   date: "December 2024",
      //   description: "How artificial intelligence is revolutionizing the way we write and maintain code.",
      //   link: "#",
      //   tags: ["AI", "Programming", "Technology"],
      // },
    ],
    certifications: [
      {
        title: "Highradius Product & Engineering Internship",
        issuer: "Highradius",
        date: "2022",
        credentialLink:
          "https://drive.google.com/file/d/1_SKjqk_JvFORNsOulySPnQXowN-s8vri/view?usp=sharing",
      },
      {
        title: "Frontend Developer (React)",
        issuer: "HackerRank",
        date: "2024",
        credentialLink: "https://www.hackerrank.com/certificates/7488ad6a8ed1",
      },
      {
        title: "The javascript Course",
        issuer: "Udemy",
        date: "2024",
        credentialLink: "#",
      },
      {
        title: "Google IT Support",
        issuer: "Coursera",
        date: "2020",
        credentialLink:
          "https://coursera.org/share/f7b8d5a8903b8430c3c45d4e30c98bd8",
      },
    ],
    academics: [
      {
        title: "Bachelor of Technology in Information Technology",
        institution: "KIIT University",
        year: "2019-2023",
        // achievements: [
        //   "Graduated with First Class Honours",
        //   "Published research paper on Machine Learning",
        //   "Led the university coding club",
        // ],
      },
    ],
    linkedinPosts: [
      {
        id: 1,
        name: "Sustainable Outreach and Universal Leadership (SOUL) Limited",
        content:
          "We are absolutely thrilled to extend our sincerest appreciation and applause to our incredible Sustainable Outreach and Universal Leadership (SOUL) Limited's ISBT Team for their outstanding dedication and hard work, culminating in the successful completion of the ISBT Baramunda Bhubaneswar project! ",
        date: "10 Months ago",
        likes: 72,
        comments: 2,
        shares: 6,
        image:
          "https://media.licdn.com/dms/image/v2/D4D22AQGuZdbCQTJSMw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709374201500?e=1740614400&v=beta&t=ZIomziAR8iQLbsIdgQjN5TjrG7GZNADSzw35AaV0va0",
      },
      {
        id: 2,
        name: "Akash Sharma",
        content:
          "Just published my first technical blog post about mastering TypeScript! 📝 Check out these tips that helped me level up my development game...",
        date: "1 week ago",
        likes: 43,
        comments: 12,
        shares: 8,
        image: "https://placehold.co/600x400/png",
      },
      // {
      //   id: 3,
      //   content: "Thrilled to announce that I've earned my AWS certification! 🏆 Here's my journey and some tips for aspiring cloud engineers...",
      //   date: "2 weeks ago",
      //   likes: 489,
      //   comments: 67,
      //   shares: 34,
      //   image: "https://placehold.co/600x400/png",
      // },
    ],
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-block">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-600 dark:text-yellow-500 text-lg font-semibold mb-4 block"
            >
              My Journey & Insights
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white relative z-10">
              <span className="relative inline-block">
                Blog & Achievements
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-600/20 dark:bg-yellow-500/20 -skew-x-6 -z-10" />
              </span>
            </h2>
            <div className="mt-6 max-w-2xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Exploring ideas, sharing experiences, and documenting my growth
                through writing and learning
              </p>
            </div>
          </div>
        </motion.div>

        {/* Blogs Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <FaBlog className="text-blue-600 dark:text-yellow-500" />
            Latest Blog Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl"
              >
                <div className="text-sm text-blue-600 dark:text-yellow-500 mb-2">
                  {blog.date}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {blog.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-yellow-900/20 text-blue-600 dark:text-yellow-500 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={blog.link}
                  target="_blank"
                  className="text-blue-600 dark:text-yellow-500 font-medium hover:underline"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LinkedIn Posts Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3 justify-center">
            <FaLinkedin className="text-blue-600" />
            Featured LinkedIn Posts
          </h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="linkedin-posts-carousel"
          >
            {content.linkedinPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden h-full"
                >
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post thumbnail"
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                        <FaLinkedin className="text-2xl text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {post.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {post.date}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-6 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaHeart className="text-red-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaComment />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaShare />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <FaCertificate className="text-blue-600 dark:text-yellow-500" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl"
              >
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <a
                  href={cert.credentialLink}
                  className="text-blue-600 dark:text-yellow-500 font-medium hover:underline"
                >
                  View Credential →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievements Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-blue-600 dark:text-yellow-500" />
            Academic Achievements
          </h3>
          {content.academics.map((academic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl mb-6"
            >
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {academic.title}
              </h4>
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                {academic.institution} • {academic.year}
              </div>
              {/* <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                {academic.achievements.map((achievement, achieveIndex) => (
                  <li key={achieveIndex}>{achievement}</li>
                ))}
              </ul> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
