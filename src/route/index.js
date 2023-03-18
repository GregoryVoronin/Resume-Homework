// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Misha',
    lastname: 'Pirogov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Україна, Івано-Франківськ',
}
var nav = {
  summaryPage: {
    url: '/summary',
    text: 'Summary',
  },
  skillsPage: {
    url: '/skills',
    text: 'Skills',
  },
  educationPage: {
    url: '/education',
    text: 'Education',
  },
  workPage: {
    url: '/work',
    text: 'Work',
  },
}
var footer = {
  social: {
    email: {
      url: 'mailto:dmytro@mail.com',
      text: 'dmytro@mail.com',
    },
    phone: {
      url: 'tel:+380670000123',
      text: '+380670000123',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

router.get('/', function (req, res) {
  res.render('index', {})
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    title: 'Summary',
    header,
    nav,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    title: 'Skills',
    header,
    nav,
    main: {
      skills: {
        title: 'All skills',
        list: [
          {
            name: 'HTML',
            point: 10,
            isTop: true,
          },
          {
            name: 'CSS',
            point: 10,
            isTop: true,
          },
          {
            name: 'Git',
            point: 5,
            isTop: true,
          },
          {
            name: 'Terminal',
            point: 3,
            isTop: false,
          },
          {
            name: 'VSCode',
            point: 7,
            isTop: true,
          },
          {
            name: 'Sublime Text',
            point: 8,
          },
          {
            name: 'PhotoShop',
            point: 9,
            isTop: true,
          },
          {
            name: 'React.js',
            point: 0,
            isTop: true,
          },
          {
            name: 'PHP',
            point: null,
          },
        ],
      },
      hobbies: {
        title: 'My hobbies',
        list: [
          {
            isMain: true,
            name: 'Play the saxophone',
          },
          {
            isMain: false,
            name: 'Drive',
          },
          {
            isMain: false,
            name: 'Watch YouTube',
          },
        ],
      },
    },
    footer,
  })
})
// ================================================================

router.get('/education', function (req, res) {
  res.render('education', {
    title: 'Education',
    header,
    nav,
    main: {
      education: {
        title: 'My education',
        list: [
          {
            name: 'School',
            isEnd: true,
          },
          {
            name: 'Music academy',
            isEnd: true,
          },
          {
            name: 'IT BRAINS',
            isEnd: false,
          },
        ],
      },
      certificates: {
        title: 'My certificates',
        list: [
          {
            id: 95847,
            name: 'C0',
          },
          {
            id: 45789,
            name: 'C1',
          },
          {
            id: 32358,
            name: 'C3',
          },
        ],
      },
    },
    footer,
  })
})
// ================================================================

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    title: 'Work',
    header,
    nav,
    main: {
      works: {
        title: 'Work History',
        list: [
          {
            position: 'Junior Fullstack Developer',
            company: {
              name: 'IT Brains',
              url: 'https://it-brains.com.ua',
              blank: true,
            },
            duration: {
              from: '10/10/2022',
              to: '02/03/2023',
            },
            projectAmount: 2,
            projects: [
              {
                name: 'Resume',
                url: 'https://resume.com.ua',
                about: 'Text about company',
                stackAmount: 3,
                stacks: [
                  {
                    name: 'React.JS',
                  },
                  {
                    name: 'HTML / CSS',
                  },
                  {
                    name: 'NodeJS',
                  },
                ],
                awardAmount: 2,
                awards: [
                  {
                    name: 'Award 1',
                  },
                  {
                    name: 'Award 2',
                  },
                ],
              },
              {
                name: 'Test Project 0',
                url: null,
                about: 'Text about company',
                stackAmount: 1,
                stacks: [
                  {
                    name: 'HTML / CSS',
                  },
                ],
                awardAmount: 1,
                awards: [
                  {
                    name: 'Award 1',
                  },
                ],
              },
            ],
          },
          {
            position: 'Junior Fullstack Developer',
            company: {
              name: 'Dream',
              url: null,
              blank: true,
            },
            duration: {
              from: '10/03/2022',
              to: null,
            },
            projectAmount: 0,
          },
        ],
      },
    },
    footer,
  })
})

// ================================================================

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
