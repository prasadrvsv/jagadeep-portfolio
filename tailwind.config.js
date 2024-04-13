/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: 'rgb(30, 30, 30)',
        customRed: 'rgb(255, 0, 0)',
        customGreen: 'rgb(0, 255, 0)',
        customExperience: 'rgb(209, 209, 199)',
        customUl: 'rgb(127,119,109)',
        customYellow: 'rgb(242,191,37)',
        customYellowFont: 'rgb(1,2,40)',
        customVanilla: 'rgb(227,30,53)',
        customVanillaFont: 'rgb(226,208,186)',
        customFiling: 'rgb(222,221,212)',
        customFilingFont: 'rgb(116,83,56)',
        customLinkedin: 'rgb(41,103,178)',
        customLinkedinFont: 'rgb(203,215,221)',
        customGithub: 'rgb(21,25,36)',
        customGithubFont: 'rgb(224,224,224)',
        customInsta: 'rgb(82,68,94)',
        customInstaFont: 'rgb(188,203,229)',
        customCard1: 'rgb(124,160,107)',
        customCard1font: 'rgb(228,222,128)',
        customCard2: 'rgb(198,183,165)',
        customCard2font: 'rgb(57,36,32)',
        customCard3: 'rgb(151,177,166)',
        customCard3font: 'rgb(57,62,65)',
        customCard4: 'rgb(226,208,187)',
        customCard4font: 'rgb(227,29,53)',
        customCard5: 'rgb(205,112,63)',
        customCard5font: 'rgb(228,216,200)',
        customFooter:'rgb(216,204,181)',
      },
      "height": {
        "screen-minus-nav": "calc(100vh - 5rem)"
      }
    },
  },
  plugins: [],
}