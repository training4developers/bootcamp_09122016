# Welcome to the Front-End Web Development Bootcamp!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:
- Monday - Friday: 9am to 5pm

Breaks:
- Morning: 10:25am to 10:35am
- Lunch: Noon to 1pm
- Afternoon #1: 2:15pm to 2:25pm
- Afternoon #2: 3:40pm to 3:50pm

## Course Outline

### Week 1

- Day 1 - HTML & CSS
- Day 2 - CSS, SASS
- Day 3 - JavaScript - Language Features (Part 1 of 2)
- Day 4 - JavaScript - Asynchronous Programming (Part 2 of 2)
- Day 5 - React (Part 1 of 2)

### Week 2

- Day 6 - React (Part 2 of 2)
- Day 7 - MVC, Flux, Redux, Relay (Part 1 of 3)
- Day 8 - MVC, Flux, Redux, Relay (Part 2 of 3)
- Day 9 - MVC, Flux, Redux, Relay (Part 3 of 3)
- Day 10 - Project Day

## Links

### Instructor's Resources

- [DevelopIntelligence](http://www.developintelligence.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Blog Posts](https://github.com/training4developers/react-flux-blog)
- [TopTal Angular Directive](https://www.toptal.com/angular-js/angular-js-demystifying-directives)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)

## Setup Instructions

This is a starter project for creating an HTML/SASS/React/Redux/Relay application.

### Application Setup

Step 0. Please completely read and thoroughly understand the instructions below before performing them.

Step 1. Download Install Node.js version 6 or higher. Version 6 or higher MUST be installed. If you have an older Node.js version that you need to keep, then use something like [NVM](https://www.npmjs.com/package/nvm) to manage multiple Node.js installations. To install Node.js click [here](https://nodejs.org).

Note: Seriously, please use Node version 6 or higher. There are certain features such as destructuring and spreads which will not work with earlier versions of Node.js. If you use an earlier version your code will fail.

Step 2. Download and Install MongoDB. To download MongoDB click [here](https://www.mongodb.com/download-center#community).

You may use either the tarball or Homebrew (I do not support Homebrew so you are on your own). It is assumed you have basic command line experience and can perform this install yourself. If you have any questions, please ask the instructor.

Step 3. Download this repository from [here](https://github.com/training4developers/bootcamp_09122016/archive/master.zip). Extract the zip file to a working folder on your system.

Step 4. Open a terminal window. From the terminal prompt, run the following commands. See the note below about executable paths.

```bash
$ ~/mongodb/bin/mongod --dbpath ~/mongodb/data/db

$ ~/mongodb/bin/mongoimport -d bootcamp -c widgets --jsonArray ./widgets.json
```

Note: Update your paths to reflect where you installed **mongod** and to what your database path is. If you did not create a folder to store your database in, then create a folder and use that folder path for the **dbpath** value. Also, update the path of **widget.json** to theextracted project folder. Homebrew paths will differ from the paths above.

The MongoDB should now be up and running, and populated with sample data.

Step 5. Open a new terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 6. From the terminal, run the following command:

```bash
$ npm i && npm start
```

It will take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in that file. Then re-run the command above.

This set has been completed successfully when you receive the following message:

```bash
web server running on port 3000
please do not close this terminal window
please use a new terminal window to run additional commands
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 7. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The starter web application should load and be usable.

**To Modify the Web Application**

Step 8. Open a new terminal window (do not use the same terminal window as the web server), change to the project folder.

Step 9. From the terminal, run the following command:

```bash
$ npm run webpack
```

Note: This command will run, and then wait for file changes to process updated source code from the **src** folder. Webpack does **NOT** exit and return to a terminal prompt. Please do not close this terminal window.

Step 10. Open your favorite text editor (such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **src/www** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

Visual Studio Code supports JSX out of the box. Atom requires the **react** package to be installed. To install it from the menu bar, go to Packages -> Settings View -> Install Packages/Themes. Search for **react**, then click **Install** (you may need to scroll down the search results to find the package). Sometimes Atom will not be able to download the package because of proxy settings. To resolve this run the following commands from a terminal window, replacing the localhost URL with your proxy URL setting:

```bash
$ apm config set proxy "http://localhost:8080"

$ apm config set https_proxy "http://localhost:8080"

$ apm config set strict-ssl false
```

Restart Atom, then re-attempt to install the **react** package again.

JavaScript & HTML linting support can be added by installing the **linter**, **linter-htmlhint**, and **linter-eslint** packages.

While other editors support JSX and other linting features (such as IntelliJ or WebStorm), I only support Visual Studio Code and Atom in class.

### NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - starts the web server
- **npm run clean** - removes the **dist** folder
- **npm run build** - removes the dist folder, builds and deploys the server app, and the web app
- **npm run webpack** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **dist/www** folder
- **npm run webpack-once** - runs webpack once to process web app files, and deploys them to the **dist/www** folder
- **npm run server** - builds the server application, and deploys it to the **dist** folder
- **npm run update-schema** - updates the GraphQL schema for RelayQL

### Useful Resources

- [React](https://facebook.github.io/react/)
- [Flux] (https://facebook.github.io/flux/)
- [Redux] (http://redux.js.org/)
- [GraphQL](http://graphql.org/)
- [Relay](https://facebook.github.io/relay/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.github.io/)
- [Immutable.js](https://facebook.github.io/immutable-js/)
- [Babel Relay Plugin](https://facebook.github.io/relay/docs/guides-babel-plugin.html)
- [Bootstrap v4](http://v4-alpha.getbootstrap.com/)
- [SASS](http://sass-lang.com/)
