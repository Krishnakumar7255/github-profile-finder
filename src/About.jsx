import React from 'react'

const About = () => {
  return (
     <div className='pt-20
     min-h-screen bg-gradient-to-r  from-blue-900 to-violet-400 flex items-center justify-center px-6 py-10'>
      
      <div className='bg-white rounded-2xl shadow-xl max-w-4xl p-8'>
        
        <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 font-mono underline'>
          GitHub Profile Discover
        </h1>

        <p className='text-gray-600 leading-relaxed text-justify space-y-4'>
          GitHub Profile Discover is a simple yet powerful web application designed to help users explore and understand GitHub profiles in an easy and interactive way. This platform allows users to search for any GitHub username and instantly view important details such as profile information, repositories, followers, and activity. The main goal of this project is to simplify the process of accessing GitHub data without needing to navigate through multiple pages on the official site.
          <br /><br />
          The application is built using modern web technologies like React, ensuring a fast, responsive, and user-friendly experience. It focuses on clean design and intuitive navigation so that even beginners can use it without any confusion. Users can quickly get insights into a developer’s work, including their coding interests, popular repositories, and overall contributions.
          <br /><br />
          GitHub Profile Discover is especially useful for students, recruiters, and developers who want to review profiles efficiently. It can help recruiters evaluate candidates, allow developers to showcase their work, and enable learners to explore and get inspired by other programmers’ projects. By presenting data in a structured and visually appealing format, the application enhances the overall experience of exploring GitHub.
          <br /><br />
          This project also demonstrates the use of APIs, component-based architecture, and dynamic data handling in React. It reflects practical knowledge of frontend development and highlights the importance of building real-world applications.
        </p>

      </div>
    </div>
  )
}

export default About
