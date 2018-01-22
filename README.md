# magicmirror-react

## This is a re-design of the Magic Mirror project to make installation, deployment, and custom modules / components much easier.


You can find the original project here: [https://github.com/MichMich/MagicMirror](https://github.com/MichMich/MagicMirror)

I worked on a custom module for a friend and I found the base magic mirror javascript, DOM transitions, and lack of templating libraries so difficult and infuriating that it was easier for me to literally re-factor the whole thing for ReactJS.  The techical debt associated with creating modules for such a project when modern frameworks exist is a hill I did not wish to climb. 

 You can find the original project, a surfing forecast. [MagicMirror Module Surf](https://github.com/Privacywonk/MMM-Surf)

## Layout 
The default layout is similar in theory to Magic mirror: a top row of 150px high, a middle row of three columns with no gutters (but padding) and a bottom row of 150px high. 

![layout](https://github.com/CaptainJimmy/magicmirror-react/Capture.PNG)


## Install

clone the repo:

``` $ git clone git@github.com:CaptainJimmy/magicmirror-react.git
$ cd magicmirror-react
 ```


install the libraries: 

``` $ npm install ```

Start Development:
``` $ npm start ```
This loads both the dev server on port 3000, and an API Proxy for Magic Seaweed (lack of CORS headers) on port 3001.

### Build for deploy

``` $ npm run build ```

Your build folder is ready for deployment, or local hosting with Express.

Should you like to host the file locally on your Pi, this starts a lightweight HTTP server on port 3001:

``` $ npm run server ``` 

You then can spin up a browser:

``` $ chromium-browser --kiosk http://localhost:3001/```



