# Developer Portfolio 🔥

## A clean, modern and responsive dev portfolio using Tailwind CSS & Next JS

<p align="center">
  <kbd>
    <img src="https://s9.gifyu.com/images/overview.gif"></img>
  </kbd>
</p>

### Just Simple and well design portfolio to showcase works and skills

- Useful for the freelancing journey 🚀. You can showcase your skills and the works you have done.
- Highly customizable portfolio. You can easily customize it as you want.

## Live Demo 🚀

[don't click here](https://azadul-islam-rasel.vercel.app)

## Technologies Used 🖥️

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Email JS](https://www.emailjs.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Iconify](https://iconify.design/)

## Getting Started

```bash
# Clone this repository
git clone https://github.com/Rasel105

# Go into the repository
cd dev-portfolio

# Setup default environment variables

# For Linux
cp env.example .env.local
# For Windows
copy env.example .env.local

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Setup

- Create ENV File

```bash
- dev-portfolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

```env
// .env
EMAIL_SERVICE_ID= "YOUR SERVICE ID"
EMAIL_TEMPLATE_ID= "YOUR TEMPLATE ID"
PUBLIC_KEY= "YOUR PUBLIC KEY"
```

- Email JS - [Sign Up](https://dashboard.emailjs.com/sign-up)
- Quick Tutorial : https://youtu.be/I4DKr1JLC50

## Customize according to your need.

#### Personalize page content in `src/mock/profile.js` & modify it as per your need.

```javascript
export const SOCIAL_LINKS = [
  {
    link: 'https://github.com/Rasel105',
    icon: 'akar-icons:github-fill',
  },
  {
    link: 'https://www.linkedin.com/in/azsrasel/',
    icon: 'akar-icons:linkedin-fill',
  },
];

export const HERO_TITLES = ['Azadul Islam Rasel', 'Full-stack Developer', 'Javascript Enthusiast'];

export const aboutParagraph =
  'Highly motivated and enthusiastic Full Stack Developer with experience in designing, developing and maintaining web applications using technologies such as JavaScript, React, Node.js. ';

export const contactEmail = 'azsrasel.dev@gmail.com';

export const documentTitle = 'Hello I am Azadul Islam Rasel | Full Stack Developer | Javascript Enthusiast';
```

#### Customize Project Section

`/src/mock/projects.js`

- change projects with yours.

#### Customize Skill Section

`/src/mock/tech-skills.js`

- change skills with yours.
- You can easily add new skill, new icon by providing iconify icon name.
- example as below:

```javascript
  {
    label: 'Your Skill',
    proficiency: '90%',
    icon: 'icon',  // <-- find icon from iconnify
    iconClasses: 'text-3xl', // <-- add classes
  }
```

## Add more Lottie

- checkout this directory `src/mock/lottie`
- You can add more lottie in `.json` format and use it.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## For the Future

If you want to add more, Please don't hesitate to open a [pull request](https://github.com/Rasel105/pulls).
