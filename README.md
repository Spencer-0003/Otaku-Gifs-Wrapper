# OtakuGifs Wrapper
NOTE: I am NOT affiliated with OtakuGifs in anyway.

This is a simple wrapper for the OtakuGifs API, you need a valid API key for this to work.

Gif names:
angrystare, bite, bleh, blush, brofist, celebrate, cheers, clap, confused, cry, cuddle, dance, drool, embarrassed, handhold, happy, headbang, hug, kiss, laugh, lick, love, mad, nervous, no, nom, pat, peek, pinch, poke, pout, punch, roll, run, sad, scared, shrug, shy, sigh, sip, slap, sleep, smack, smile, smug, sorry, stare, surprised, thumbsup, tickle, tired, wave, wink, yawn, yay, yes

Syntax:
```javascript
const { gifs } = require("otakugifs-wrapper");
const gifHandler = new gifs("Your api key here");
gifHandler.gif_name_here()
```

Usage:
```javascript
const { gifs } = require("otakugifs-wrapper");
const gifHandler = new gifs("Your api key here");

const smile = () => {
    return gifHandler.smile() // Returns a URL.
};
```