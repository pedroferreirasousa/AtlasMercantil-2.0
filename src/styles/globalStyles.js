import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  
  :root{
    --font-size-texto: clamp(0.875rem, 0.7679rem + 0.5357vw, 1.25rem);
    --font-size-titulo: clamp(1.25rem, 0.9643rem + 1.4286vw, 2.25rem);
    --font-family-titulo: "Poppins", serif;
    --color-darkGreen: #182215;
  

  }

    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

body::-webkit-scrollbar{
  width: 10px;
}

body::-webkit-scrollbar-track{
  background-color: #182215;
}

body::-webkit-scrollbar-thumb{
  background-color: #df9f15;
  border-radius: 40px;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  background: linear-gradient(to bottom, #FDFAF3 0%, #FDFBF4 20%, #FCF8EF 40%, #FBF6E9 100%);
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* fim do reset */

html,body{
  width:100vw;
  min-width: 320px;
  height: auto;
  min-height: 100vh;
  font-family: "Roboto", serif;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
`;

export default GlobalStyles;
