# Trick2g's entertainment center(twitch + youtube) V2.0

![trkChamp](https://res.cloudinary.com/zzrot/image/upload/v1543383281/trick2g_site/trkChamp_big.png)
![trkChamp](https://res.cloudinary.com/zzrot/image/upload/v1543383281/trick2g_site/trkChamp_big.png)

## Aim
1. User will see a field that contains trick2g's youtube video feed.
2. User will be able to watch trick2g's twitch channel and chat in twitchchat.

## Version 2.0 Goal
1. Make youtube section according youtube's API all by myself.
2. Customize some of the twitch embed part according to twitch's API.

References:
* https://www.youtube.com/user/Trick0850
* https://www.twitch.tv/trick2g
* https://developers.google.com/api-client-library/javascript/start/start-js

Features: 

 1. Get youtube channel data everytime the page load
 2. Fetch all the videos on that channel
 3. **Make it load as you scroll (just like on youtube)** BONUS FEATURE maybe for the next version

Bugs:

1. navbar item does not collapse ✅

 Progress:
  1. Found the playlist ID for all of his videos: 
    `UUuSrv3qgQA7SSi6R9bWag5A`
  2. Get the general UI for the youtube part. ✅
  3. Utilize Youtube API to generate videos. ✅
  4. Fix twitch.tv 401 error
  5. 