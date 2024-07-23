import Controller from '@ember/controller';

export default class ExperienceController extends Controller {
  workExperience = [
    {
      position: 'Full-stack Web Developer',
      company: 'Sightcall',
      duration: '04/2022 - Present (2 years)',
      location: 'Boulogne-Billancourt, France',
      description: [
        "Developed and tested new features to enhance the company's SaaS solutions, a digital process automation app and a video conferencing platform.",
        'Worked in a Test-Driven Development (TDD) environment; created APIs and their corresponding frontend pages, improving the functionality and user experience of the platforms.',
        'Engaged in backporting and refactoring legacy code to improve performance and maintainability.',
        'Integrated third-party services like Sharepoint and Google Drive.',
        'Participated in an Agile setup with bi-weekly sprints and several major releases annually.',
      ],
      stackUsed: {
        frontend: ['Ember.js', 'React.js', 'Bootstrap', 'Jest', 'XState'],
        backend: ['Ruby on Rails', 'Sidekiq', 'RSpec', 'JSONAPI-Resources'],
        databases: ['MariaDB', 'Redis', 'ElasticSearch'],
        others: ['Bash', 'Docker', 'Jenkins', 'Gitlab CI/CD'],
      },
    },
    {
      position: 'React Frontend Developer',
      company: 'MBN-TECH',
      duration: '10/2021 - 04/2022 (6 months)',
      location: 'Bucharest, Romania',
      description: [
        "Worked on the development of one of our client's decentralised application, a multi-blockchain platform.",
        'Learnt about blockchain technology and smart contract interaction through web3.js, as well as about concepts of the decentralised finance world such as token creation, staking, yield farming and liquidity mining.',
      ],
      stackUsed: [
        'Typescript',
        'React.js',
        'Material-UI',
        'Next.js',
        'Node.js',
        'Solidity',
      ],
    },
    {
      position: 'Customer Excellence Suport Analyst',
      company: 'VTEX',
      duration: '11/2020 - 08/2021 (9 months)',
      location: 'Bucharest, Romania',
      description: [
        'Supported our partners to develop websites for our clients using the company’s web framework.',
        'Discussed with clients and partners to address their business requirements and technical questions.',
        'Oversaw project management, SEO optimisation, debugging and bug fixing.',
        'Gained extensive knowledge about the digital commerce industry.',
      ],
      stackUsed: ['HTML', 'CSS', 'JavaScript', 'React', 'GraphQL', 'VTEX IO'],
    },
    {
      position: 'Junior Data Scientist',
      company: 'GfK',
      duration: '10/2018 - 11/2020 (2 years)',
      location: 'Bucharest, Romania',
      description: [
        'Worked on a variety of projects, ranging from simple ones such as Test and Control studies (which measure advertisement effectiveness using geographic experiments) to more complex ones such as Marketing Mix Modelling studies (which help clients to understand the impact of their promotions and advertisements spending, as well as to provide forecasts to assist future marketing campaigns).',
        'Developed and automated tasks using custom scripts.',
        'Dealt with collecting and pre-processing databases and following and modifying pre-made scripts.',
        'Trained colleagues and wrote technical guides.',
      ],
      stackUsed: ['R', 'Python', 'SPSS', 'VBA', 'BASH', 'SQL', 'GfK StarTrack'],
    },
  ];
}
