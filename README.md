# Kenmei Landing Page Test
Basic (and quick) landing page schema to simulate the client original web page.

# Main features for Kenmei Landing Page Test
Main used technologies are React JS vs 17, Typescript and Styled-Components.

As the code test instructions just asked about a landing page, I decided to poorly simulate the own client web page.

There is a button at the middle of the image. By pressing it a notification message will be shown. The time that this message stays visible is configured inside '/constants/NotificationConstants.ts' and can be changed. 

I tried to build a generic notification message that receives a notification id and display it's value. For that reason I created to different message entries. Since there is only one button to trigger the notifications, the exact message to be showed will depend on the time when we press the button (so probably after clicking a few times both kinds of messages will appear).

I created a component-key map so it could be used to fill the data-testid of each component and also to use that id's at the tests. But I'm afraid they will come with the next commit.

# Running app
Clone this repository
Open app main folder and run "yarn install" command. This will install dependencies locally.
Execute "yarn start". The app will be opened at http://localhost:3000/
