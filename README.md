# FRONTEND MENTOR - CALCULATOR CHALLENGE SOLUTION

![](./screenshots/desktop_blue.png)

This is one of the solutions to the [Frontend Mentor Calculator Challenge](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).

See the real-time solution [here](https://calc-challenge.vercel.app).

## SUMMARY

- [ABSTRACT](#ABSTRACT)
  - [CHALLENGE](#CHALLENGE)
  - [PRINTS](#PRINTS)
- [PROCESS](#PROCESS)
  - [TOOLS](#TOOLS)
- [AUTHOR](#AUTHOR)

## ABSTRACT
This was a relatively easy challenge to do, I didn't use any particular framework or library; building the entire code in pure HTML, CSS and JS.

### CHALLENGE

The challenge is simple, you must build a calculator that assimilates to the presented design.

You can use whatever tools you want to complete the challenge.

Users need to be able to:

- See elements on the screen from the device's resolution without distortion (**responsivity**).
- Perform basic mathematical operations such as: multiplication, division, subtraction and addition.
- Have the ability to choose one of the page themes dynamically.
- **Bonus**: Have the last chosen theme stored inside the browser as `prefers-color-scheme`.

### PRINTS

## BLUE THEME or THEME 1
![](./screenshots/desktop_blue.png)
## WHITE THEME or THEME 2
![](./screenshots/desktop_white.png)
## PURPLE THEME or THEME 3
![](./screenshots/desktop_purple.png)

## PROCESS
I started by creating a div "main" to perform responsiveness tests, creating the structure of the page - like the screen, the keyboard, the buttons, the header, the **input** of the themes.

Soon after I went to styling, created the variables with the colors of each theme (provided by the challenge) and separated them; my plan from the beginning was to change the class of the "body" tag and organize the styles by the respective classes of the themes, thus allowing a simple change in JS and a smooth transition of the colors with the CSS "transition" (since I chose not to use any other complex tool - aka React or SASS - and did everything with pure HTML, CSS and JS).

All in all, I finished the project creating a basic functional calculator system with the proposed design - I had to fix some minor bugs for the final result.

### TOOLS

- Basic HTML
- CSS variables
- Flexbox (CSS) | I decided to highlight this one since it is ESSENTIAL to make a responsive page
- Font ["Spartan from Google Fonts"](https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap)

## AUTHOR
**Made by niloodev | Ezequiel Nilo**

**ANY TIPS OR FEEDBACK IS HIGHLY APPRECIATED! 🐸**
