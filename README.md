# magicmirror-react

## This is a re-design of the Magic Mirror project to make installation, deployment, and custom modules / components much easier.


You can find the original project here: [https://github.com/MichMich/MagicMirror](https://github.com/MichMich/MagicMirror)

I worked on a custom module for a friend and I found the base magic mirror javascript, DOM transitions, and lack of templating libraries so difficult and infuriating that it was easier for me to literally re-factor the whole thing for ReactJS.  You can find that project [here](https://github.com/Privacywonk/MMM-Surf)

## Layout 
The default layout is similar in theory to Magic mirror: Top third row, three columns with gutters, middle third row full width, bottom third row, three columns with gutters.

True magic mirror also allows for Top Third, Middle Third, and Bottom Third, but at this time I focused on making it a simpler design, of course with react you can do whatever you like.

## Install

clone the repo:

``` $ git clone git@github.com:CaptainJimmy/magicmirror-react.git
$ cd magicmirror-react
 ```


install the libraries: 

``` $ npm install ```

Start Development:
``` $ npm run client ```

### Build for deploy

``` $ npm run build ```

