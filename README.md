# Tau Beta Pi Club Website

This is the repository for the club website for the Washington Alpha chaphter of Tau Beta Pi, an
engineering honors society at the University of Washington. This README documents
the goals of this repository and how to run and deploy the repository to the webpage.


## About

This website is composed of frontend only, build with React and React router for the illusion of
multi-page content. The gh-pages branch is deployed to the website link, at [TODO insert link]

## Installation Requirements

To develop this website, you must have npm installed. If you don't have it installed, the installation
guide provided by the [UW CSE Department](https://courses.cs.washington.edu/courses/cse154/22sp/resources/setup.html) is excellent. This guide also assumes you have Git installed, or some way to use Git like
GitHub desktop.

To get started, clone this repository and install required packages using the following commands:
```
git clone git@github.com:Codax2000/tbp-club-website.git
cd tbp-club-website
npm install
```
The first line clones the repository into whatever is the current folder. Then, `npm install` installs
the packages that this repository requires. Once that finishes running, run

## Other NPM Commands

There are a number of other NPM commands that will be necessary when developing:
```{java}
npm start       // start a live-updating, local version of the website
npm run build   // create a production build in a folder you can export
npm run deploy  // build website and deploy to gh-pages branch
```

## Design Overview

The plan of the website is something like the following, though specifics will be tracked in GitHub
via the issues and projects tabs of the repository.

There are several subpages with various different bits of information about the club.

### Home
Several sections:
 - announcements, updated weekly
 - member shout-out, updated weekly
 - upcoming events
 - short blurb about TBP
 - inspirational quote

### Contact Us
Club email link
Instagram (TBD)

### Calendar
Embedded Google Calendar with club schedule (TBD)

### About Us
About TBP
Officer and advisor about and contact information

## Other notes
 - Place member pictures in the `src/img/mugshots` directory, named with the member's name, like `Last_First_Middle.jpg` if we need a script of some sort.
 - Place pictures from the creative commons, if used, in the `src/img/cc-images` directory
 - Please check `bootstrap` or `React-Bootstrap` for styling before adding a style to `index.css`.
 - Please document classes in `index.css` and describe their use (not their behavior).
 - Going forward, please document each react component with your name, date last modified, and a brief description of what the component does. Also, please describe all the props used for that component (The props in `templates` are not commented, apologies). You can copy and paste the following:
  ```
[First Last]
[Date of Modification]

[Description of component]
[Prop 1]: {[type]} description
[Prop 2]: {[type]} description
  ```