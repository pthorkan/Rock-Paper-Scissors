# Rock Paper Scissors

This website aims to make a modern-play on the age-old game of Rock Paper Scissors, in a simple, user-friendly and interactive manner.

There are two game-play modes, Easy and Hard.

The Easy game has Rock Paper Scissors options.

The Hard game introduces two additonal options, to create Rock Paper Scissors Lizard Spock.

![image]()

# Features
## Easy Game
* The main landing page is a graphic of Rock Paper Scissors. 
* The game title of Rock Paper Scissors, noted below the image in bold.

<img src="/workspace/Rock-Paper-Scissors/assets/Images/Logo and Title.jpg" width="500">

* The game-play options are in button format. Each option highlights on hover for increased interactivity.

<img src="/workspace/Rock-Paper-Scissors/assets/Images/highlight option.jpg" width="500">

* Below the game-play buttons, you will find the game difficulty selection- 'Easy' and 'Hard'.
* Current game selection will be underlined.
* Basic game rule of 'First to 5 wins' noted in between both.

<img src="/workspace/Rock-Paper-Scissors/assets/Images/Game play modes and game rule.jpg" width="500">

* The game score areas are denoted to the left and right sides of the webpage. 
* Once the Player selects a button, it gets pinned underneath the Player score column. 
* The Computer selection is then randomly generated, and pinned beneath the Computer score column automatically. 
* Both selections are assessed and the result is pinned to the centre column. If there is a Player or Computer win, then the respective score counter is increased. If it is a tie, both scores remain the same.

<img src="/workspace/Rock-Paper-Scissors/assets/Images/Game Scores and results area.jpg" width="500">

* Once the score has reached 5, the champion will be crowned under either column.

<img src="/workspace/Rock-Paper-Scissors/assets/Images/champion.jpg" width="500">

* After a pause of 3 secs, the score counters reset for a new game.

## Hard Game
* The Hard game introduces two additonal game play options of Lizard and Spock.

<img src="/workspace/Rock-Paper-Scissors/assets/Images/Hard game options.jpg" width="500">

* Game plays out the same as the Easy game mode. Once the Player selects an options it gets pinned under the Player column, the Computer choice is automatically generated and pinned below Computer column. The winner of the tie is computed and respective scores are increased unless the result is a tie.
* Player wins are noted in red, while computer wins are noted in black. Losing selections have a reduced opacity for clarity purposes.

<img src="/workspace/Rock-Paper-Scissors/assets/Images/Hard game score area.jpg" width="500">

# Testing

* Tested the website for responsiveness via the google devtools for different screen sizes.

* Tested the game win scenarios to ensure the correct game logic.

* Tested game play scenarios to ensure the correct champion is selected.

* Tested that both the score area and counters reset for next game.

# Vaildator Testing 

* HTML
    * Ran code through W3C code validator check and corrected all errors.
* CSS 
    * Ran code though W3C CSS code validator and corrected all errors.

* Lighthouse
    * Ran the code through Lighthouse in google dev tools and added aria-labels to the button selections to increase accessibility as per the recommendations.

* Easy game Lighthouse Score

<img src="/workspace/Rock-Paper-Scissors/assets/Images/index Lighthouse.jpg" width="500">


* Hard game Lighthouse Score

<img src="/workspace/Rock-Paper-Scissors/assets/Images/hard game lighthouse.jpg" width="500">


# Deployment
* The site was deployed to Github Pages. The steps to depoly were as follows:
    * From the Github repository Rocky-Rovers-FC, navigate to settings tab.
    * Next, on the left hand side menu under 'Code and automation' find and click the 'pages' tab.
    * Change the branch to Main and click Save in order for website to be deployed. Wait a few minutes and refresh for the green published status. 

Link to website - 

# Credit

* Initial game play ideas were developed after watching Web Dev Simplified tutorial on youtube.
* The image animation fading on the volunteer page was taken from GeeksforGeeks website, article called 'How to create fade-in effect on page load using CSS ?'.
* Various Html, CSS and JavaScript code hacks taken from W3Schools and stackoverflow forums and adapted to suit.


## Images
* The game logo was taken from Freepik - Flaticon website. Credited in the footer of the webpage.
ref="https://www.flaticon.com/free-icons/rock-paper-scissors"