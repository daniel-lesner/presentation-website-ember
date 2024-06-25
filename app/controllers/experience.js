import Controller from '@ember/controller';

export default class ExperienceController extends Controller {
  workExperience = [
    {
      position: 'Full-stack Web Developer',
      company: 'Sightcall',
      duration: '04/2022 - Present (2 years)',
      location: 'Boulogne-Billancourt, France',
      description: [
        "Developing and testing new features, addressing bugs and issues, with the scope of improving the company's solutions, a digital process automation application and a video conferencing platform.",
        'Reading documentation and accessing external APIs to integrate third-party services such as Sharepoint or Google Drive.',
        'Occasionally, assigned on backporting or refactoring of legacy code.',
      ],
      stackUsed: [
        'Ruby on Rails',
        'Ember.js',
        'MariaDB',
        'Redis',
        'ElasticSearch',
        'Docker',
        'Jenkins',
        'Gitlab CI/CD',
      ],
    },
    {
      position: 'React Frontend Developer',
      company: 'MBN-TECH',
      duration: '10/2021 - 04/2022 (6 months)',
      location: 'Bucharest, Romania',
      description: [
        "Worked on the development of one of our client's decentralised application, a multi-blockchain ICO platform.",
        'Learnt about blockchain technology and smart contract interaction through web3.js, as well as about concepts of the decentralised finance world such as token creation, staking, yield farming and liquidity mining.',
      ],
      stackUsed: ['Typescript', 'React.js', 'Next.js', 'Node.js', 'Solidity'],
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
    },
    {
      position: 'Junior Data Scientist',
      company: 'GfK',
      duration: '10/2018 - 11/2020 (2 years)',
      location: 'Bucharest, Romania',
      description: [
        'Worked on a variety of projects, ranging from simple ones such as Test and Control studies (which measure advertisement effectiveness using geographic experiments) to more complex ones such as Marketing Mix Modelling studies (which help clients to understand the impact of their promotions and advertisements spending, as well as to provide forecasts to assist future marketing campaigns).',
        'Used mainly R, SPSS and VBA.',
        'Automated some of my tasks in R, Python and VBA.',
        'Collected and processed data; followed and modified pre-made scripts or created new scripts.',
        'Trained colleagues and wrote technical guides.',
      ],
    },
  ];
}
