import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://i.ibb.co/MC0Zh9K/Screenshot-2023-05-28-161118.png',
    title: 'Sytiqhub.com - A EV Management Dashboard',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: `The SytiqHub Electric Vehicle (EV) Dashboard is a comprehensive software platform that provides users with real-time monitoring and control of their EV charging infrastructure. `,
    repoLink: '',
    sourceLink: 'https://admin.sytiqhub.in/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://i.ibb.co/q56qnHC/Screenshot-2023-05-28-161052.png',
    title: 'ABS MACHINERY & TRADE SERVICES LTD',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description: `ABS Machinery & Trade services Ltd established in 2015 deal with Machinery both LPG, Steam system, Solar system, Chemical & Argo, Pharmacy and Import machinery with an expertise of 8 years of business acumen.`,
    repoLink: '',
    sourceLink: 'https://absmachinery.com/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://i.ibb.co/LNzstXt/Screenshot-2023-05-28-161458.png',
    title: 'Sytiqhub - EV Charging App',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React Native'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    description:
      'A charging station app is a mobile application that allows electric vehicle (EV) owners to locate, access, and manage charging stations conveniently from their smartphones. These apps provide a range of features and functionalities to enhance the EV charging experience. ',
    repoLink: '',
    sourceLink: 'https://play.google.com/store/apps/details?id=com.chargingstation',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.FULL_STACK],
  },
];
