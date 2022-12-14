<h1 align="center">hero-assignment</h1>

### Published Demo • https://davealger.com/kong/

### Requirements
* Based on the pdf/png that is included in the provided project zip file make the following changes.
  - Updated hero section
  - Menu fixed to the top of the page
  - UTM query parameters added to the newsletter menu form
* Must include the use of SCSS and JavaScript
* The end result must be responsive (desktop, tablet, and mobile)

### Nice to have
* Fixed menu transition on scroll
* Include additional build optimizations to assets
* Optimize page performance
* Include multiple git commits with comments to show progress
* Include testing

----

## Local Setup and Execution
run the following commands to clone and start the project on http://localhost:8080/

    git clone https://github.com/run-time/hero-assignment.git

    cd hero-assignment

    npm install
    
    npm start
    
----    

## Design Considerations
* try and match the branding of main site -- https://konghq.com/products/api-gateway-platform
* follow naming conventions of UTM parameters here -- https://en.wikipedia.org/wiki/UTM_parameters
* 

## Assumptions
* primary button is prominent (dark blue background and white text)
* secondary buttons are less prominent (white background and blue text with thin border)
* mock-up does not indicate a button hover transition state (choose one at random / ask UX later)
* 

## Trade-Offs
* didn't have enough time to read through the many scss bootstrap includes so I probably could have used some of those instead of making new styles 
* instead of scaling large logo svg to 80% I would compress the path data to be the correct size to 2 decimal places etc.
* using `.content-right` class as the darker backround rows in the mockup since they happen to line up - should probably make `.content-shade` it's own class?
* given more time I would turn the email subscribe form into a reusable component with style overrides
* 

----
