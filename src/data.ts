import { Project, Stat, Service } from './types';

export const projectsData: Project[] = [
  {
    id: 'battleship',
    title: 'Battleship',
    badges: ['HTML', 'CSS', 'Javascript', 'Node.js'],
    description: 'Used components of Javascript to implement basic data structures through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed.',
    githubUrl: 'https://github.com/jensenomega/battleship',
    projectUrl: '#',
    alignment: 'left' // Text is on the left
  },
  {
    id: 'movie-api',
    title: 'Movie Titles API',
    badges: ['HTML', 'CSS', 'Javascript', 'API', 'Version control'],
    description: 'Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user\'s favorite movies into another container',
    githubUrl: 'https://github.com/jensenomega/movie-titles-api',
    projectUrl: '#',
    alignment: 'right' // Text is on the right
  },
  {
    id: 'calculator',
    title: 'Javascript Calculator',
    badges: ['HTML', 'CSS', 'Javascript', 'Node.js'],
    description: 'Uses simple algorithm concepts in Javascript to produce an arithmetic result in a terminal',
    githubUrl: 'https://github.com/jensenomega/js-calculator',
    projectUrl: '#',
    alignment: 'left' // Text is on the left
  },
  {
    id: 'saas-landing',
    title: 'SaaS Landing Page',
    badges: ['HTML', 'CSS'],
    description: 'Used HTML concepts such as creating a form and a basic skeleton. It also used components of both the grid and flexbox elements to produce a landing page.',
    githubUrl: 'https://github.com/jensenomega/saas-landing',
    projectUrl: '#',
    alignment: 'right' // Text is on the right
  }
];

export const statsData: Stat[] = [
  { value: '120 +', label: 'Completed Projects' },
  { value: '95 %', label: 'Client satisfaction' },
  { value: '10 +', label: 'Years of experience' }
];

export const servicesData: Service[] = [
  { title: 'Website Development', iconName: 'Monitor' },
  { title: 'App Development', iconName: 'Smartphone' },
  { title: 'Website Hosting', iconName: 'Database' }
];

export const skillsList: string[] = [
  'HTML5',
  'CSS',
  'Javascript',
  'Node.js',
  'React',
  'Git',
  'Github'
];
