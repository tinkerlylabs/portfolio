export interface Project {
  id: string;
  title: string;
  badges: string[];
  description: string;
  githubUrl: string;
  projectUrl: string;
  alignment: 'left' | 'right'; // whether content text is on left or right
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  iconName: string;
}
