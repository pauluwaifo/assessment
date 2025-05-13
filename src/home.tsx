import React from 'react'

const Home = () => {
    const data = {
        "name": "Paul uwaifo",
        "about": "Resourceful and solutions driven IT Professional and Front-End Developer with a B.Sc. in Computer Science and over 3 years of hands-on experience in both infrastructure support and modern web development. Proven ability to build responsive, accessible web applications using React.js, Next.js, and TypeScript, alongside solid expertise in IT infrastructure, network administration, and system implementation. Strong communicator and collaborator with a passion for solving complex problems, optimizing performance, and delivering user-focused digital solution",

        "Hobbies & Interests": "football and music",
        "skills": {

            "info": [
                {
                    "name": "javascript",
                    "description": "I am proficient in JavaScript, with a strong understanding of its core concepts and features. I have experience in building interactive web applications using JavaScript frameworks such as React.js and Next.js.",
                    "level": "Intermediate",
                    "years_of_experience": 3,
                },
                {
                    "name": "css",
                    "description": "I have a solid understanding of CSS and its features, including Flexbox and Grid. I can create responsive designs that work well on various devices and screen sizes.",
                    "level": "Intermediate",
                    "years_of_experience": 3,
                }
            ],
        },
        "Passions": "Web Development, IT Infrastructure, Problem Solving, User Experience Design",
        "Academic_Background": {
          "degree": "Bachelor of Science in Computer Science",
          "university": "University of Technology",
          "graduation_year": 2022,
        },
      
      }
      

  return (
    <div className='flex flex-col h-screen mt-20'>
<div className='flex flex-row'>
    <div className="basis-1/2 flex items-center justify-center">

    <div className='w-[200px] h-[200px] rounded-full bg-grey-200 shadow-xl flex justify-center items-center border-10 border-gray-200'>
    <img src="/images/paul.jpg" alt="Paul" className="rounded-full w-1/2 h-1/2" />

    </div>

    </div>
    <div className="basis-1/2 flex flex-col justify-center items-start flex-wrap">
      <h1 className='text-4xl font-bold text-center mb-5'>Hi, I'm {data.name}</h1>
      <p className='text-left mb-5'> {data.about}</p>
<div className='flex flex-row space-x-2 items-center'>

      <button className='rounded-full px-10 py-3 border-2 border-blue-200 bg-black/20 shadow-xl'>Download cv</button>
      <button className='rounded-full px-10 py-3 border-2 border-white bg-black/20 shadow-xl'>Contact</button>
</div>
      </div>


      
</div>

<div className='flex flex-col mt-10 '>

  <h5 className='text-2xl font-bold mb-5 text-left'>WHAT I DO</h5>

<div className="flex-row flex">
    <div className="basis-1/2">
    <h5 className='text-xl font-bold text-left mb-5'>Javascript</h5>
    <p className='text-left mb-5'>I am proficient in JavaScript, with a strong understanding of its core concepts and features. I have experience in building interactive web applications using JavaScript frameworks such as React.js and Next.js.</p>
    </div>
    <div className="basis-1/2">
    <h5 className='text-xl font-bold text-left mb-5'>Javascript</h5>
    <p className='text-left mb-5'>I am proficient in JavaScript, with a strong understanding of its core concepts and features. I have experience in building interactive web applications using JavaScript frameworks such as React.js and Next.js.</p>
    </div>
</div>
<div className="flex-row flex mt-10">
    <div className="basis-1/2">
    <h5 className='text-xl font-bold text-left mb-5'>Javascript</h5>
    <p className='text-left mb-5'>I am proficient in JavaScript, with a strong understanding of its core concepts and features. I have experience in building interactive web applications using JavaScript frameworks such as React.js and Next.js.</p>
    </div>
    <div className="basis-1/2">
    <h5 className='text-xl font-bold text-left mb-5'>Javascript</h5>
    <p className='text-left mb-5'>I am proficient in JavaScript, with a strong understanding of its core concepts and features. I have experience in building interactive web applications using JavaScript frameworks such as React.js and Next.js.</p>
    </div>
</div>

</div>

    </div>
  )
}

export default Home
