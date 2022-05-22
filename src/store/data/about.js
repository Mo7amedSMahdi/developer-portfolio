export const BIO_INFORMATION = `/**
* Hi! My name is Mohammed. I'm a full-stack software 
* engineer who specializes in  Javascript, React, 
* Redux, and Rails to build oftware solutions for small 
* and large businesses. I know how to work remotely and
* collaboratively because of the experience I have 
* gained when learning to code at Microverse, an online 
* training school. In this school, I code every day 
* with other developers around the world and have 
* learned the important skills of communication and 
* teamwork. I also know how to work to tight deadlines
* because I submit capstone projects every week and make
* sure I do not go past the deadline. I also know how to 
* learn new languages quickly!.I have already created 
* some projects in Ruby, JavaScript, and HTML.  I've 
* spent the last several months working on several of 
* projects: landing pages, APIs, and a desktop delivery 
* app for a local restaurant chain. I'm in the top 5% of
*  active GitHub users in my country, which is a small 
* brag but something I'm really proud of.
 */`;

export const SKILLS = `export const Skills = async (baseURL) => {
  const skillList = [
    {
      'Front-End': ['JavaScript', 'React', 'Redux', 'jQuery', 'HTML5', 'CSS3'],
      'Back-End': ['Ruby', 'Rails', 'MySQL', 'Asp.net', 'PHP Laravel', 'Node.js'],
      'Mobile development': ['Java', 'Kotlin', 'React Native', 'flutter'],
      'Tools & Methods': ['Git', 'GitHub', 'Heroku', 'Netlify', 'Mobile/Responsive Development', 'RSpec', 'TDD'],
      'Professional': ['Remote Pair-Programming','Mob programming', 'Teamwork', 'Mentoring']
    }
  ]
  await axios.post('https://Mo7amedSMahdi.tech/personal/siklls/', skillList, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(skilsAddedAction(book));
};`;

export const UNIVERSITY = `"University": {
        "university": "Imam Ja'afer Al-sadiq",
        "department: "Computer Science",
        "body": [
            "Learnt the core fundamentals of Computer Science, Data Bases, Data",
            "Structures, Algorithms, Communications and networks, and Image Processing."
        ],
    }`;

export const BOOTCAMPS = `/**
 * BOOTCAMPS 
* - Learnt the core fundamentals of Full-Stack web development: 
*    HTML/CSS, Ruby, Ruby On Rails, React, NodeJs, Express & MongoDB,
*    while enrolled in an extremely selective (.3% acceptance rate) 
*    full-time development program.
* - Completed 2000+ development hours pair-programming with students
*   from different countries while also following agile methodologies.
* - Built 90+ projects ranging from mini-projects to complex Full-Stack
*   applications.
*- Volunteered to mentor junior developers and helped provide guidance 
*  and help to fellow peers.
 */`;

export const INTERESTS = `/**
 * INTERESTS
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`;

export const WORK_EXPERIENCE = `/**
 * WORK_EXPERIENCE
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */`;
