# MUSIC MACHINE

![responsiveness](assets/images/README_images/responsive.png)

MUSIC MACHINE is a collection of downloadable instrument samples with a completely interactive and and playable interface using your phone, tablet or computer keyboard.

Users can enjoy the freedom to join in jam sessions when real drums or piano are not available.

The target audience is amatuers, young musicians and those who want access to drums or keybaords on the go.  


The site can be found here https://hayespace.github.io/Milestone2/

## UX

### User Stories

The user should: 
- Be able to navigate through the whole site smoothly with the five collapsible panels.
- Understand the purpose of the site upon loading.
- Play each individual sound using either a mouse, touch pad or computer keyboard.
- Access two drum libraries, a piano keybard and audio recorder.
- Hear the sounds clearly and without any latency
- Record and playback live audio from the devices microphone.
- The keys and button animations should respond to each click or key stroke.
- Plug the output into an external speaker for live performance.

### Design and Colour Scheme
- The site has been designed with one easy to navigate page.  
- 5 collapsible panels each conataining a high quality background image related to the content within that panel.
- Soft rounded edges on all buttons, panels and keys
- Dark color scheme on the main background with a mild transition from black to purple enabling the lighter images to pop off the screen.
- Floating button/ pads with a soft background shadow which changes colour when active.
- Each drum pad is labelled with the name of the sound and corresponding key letter
- Animated font which changes shape upon activation


## Features

### The 5 Panels
- Info panel which explains the purpose and site usecase.
- A simple audio recorder with a two buttons, REC and STOP, and an embedded player.
- A fully interactive drum sample library with 9 animated buttons which play a sample when clicked or played on the keyboard.
- A second drum sample library with 6 animated buttons and sounds
- A fully playable piano keyboard which can be played with mouse, touchpad or keybaord.

![Five Panels](/assets/images/README_images/5panels.png)


### Logo
- Simple png of a vintage drum machine 
![Logo](/assets/images/README_images/logoss.png)
### About
- The about page is a simple 4 paragraph text box on a floating semi-opaque background
![About](/assets/images/README_images/aboutpage.png)
### Audio Recorder
- Record audio from the devices micrphone directly to the site and playback with the integrated player
![Recorder](/assets/images/README_images/recordpage.png)
### Kit 1
- 9 animated drum pads activated by click, touch or keybard depending on the device
![Kit 1](/assets/images/README_images/kit1page.png)
![Kit 1 Animated pad](/assets/images/README_images/padanimated.png)

### Kit 2 
- 6 animated drum pads activated by click, touch or keybard depending on the device
![Kit 2](/assets/images/README_images/kit2page.png)
### Piano
- Fully playable piano with animated keys activated by click, touch or keybard depending on the device
![Piano](/assets/images/README_images/pianopage.png)
![Piano Animated Key](/assets/images/README_images/pianoanimatedkey.png)


# Wirefame
The layout of the final site does not differ too much from the planned wireframes.  

The intention was always a single page with collapsible panels each containing a different instrument


## index.html
![index Wireframes](/assets/images/README_images/wf_index.png)

## Drums
![Drum Wireframes](/assets/images/README_images/wf_drums.png)

## Piano
![Piano Wireframes](/assets/images/README_images/wf_piano.png)

## Phone Index
![Phone Index Wireframes](/assets/images/README_images/wf_phone_index.png)

## Phone Piano
![Phone Piano Wireframes](/assets/images/README_images/wf_phone_piano.png)


# Technologies Used
- HTML5 - provides the content and structure for the website.
- CSS - provides the styling.
- Balsamiq - used to create the wireframes.
- Gitpod - used to deploy the website.
- Github - used to host and edit the website.

# Testing

## User Stories

- Be able to navigate through the whole site smoothly with the five collapsible panels.
    - The site is very easy to navigate and the images contained within the panels offer a visual clue as to what the user can expext from each one.  As theres is only one page the user is never far away from the main obkective and points of interaction.
- Understand the purpose of the site upon loading.
    - From the drum machine logo with large label to the 5 panel images of drum machines, Piano, and tape recorder the user can quicly and easily inderstand that this is a site about music and making music.  The design of the piano keyboard is self explainatory, as are the drum pads with large labels and letters indicating which keys to press to engage with the content.
- Play each individual sound using either a mouse, touch pad or computer keyboard.
    - The pads and piano keys are both interactive and responsive.  They animate when clicked or pressed and the corresponding sound is triggered and played through the computer speakers.
- Access two drum libraries, a piano keybard and audio recorder.
    - Kit 1, Kit 2 and Piano are each contained within their own interactive panel.  Once the panel is open then the keys and buttons become fully functional and play the sounds contained within that specific library.
- Hear the sounds clearly and without latency
    - The samples are crisp a professional and recorded from actual instruments.  As they are high quality WAV files the audio is responsive and play swith near zero latency.
- Record and playback live audio from the devices microphone.
    - The Audio recoring panel will record sounds from either a built in or external micrphone source depending on the users setup.  Upon first interaction with the site the user will be asked to allow permission to connect to their device via their browser.
- The keys and button animations should respond to each click or key stroke.
  - Each key and button has been styled with colours and fonts to suit the sound library they represent.  The colours and shadows are bright and engaging.
- Plug the output into an external speaker for live performance.
  -  Users can use either the output of their device or bluetooth to connect to external speakers or recording device for live performance or recording.

## Validator Testing

- HTML - 1 error found on works.html (Refer to Unfixed Bugs)
- CSS - No errors were found when passing through the official (Jigsaw) validator
http://jigsaw.w3.org/css-validator/validator$link


- JavaScript - 1 Error.  The arrow function does not need to be wrapped in parens so I have ignored the error here.

![JSLint](/assets/images/README_images/JSLint.png)

## Issues Encountered and Resolved
- ### Gallery - The overlay div was covering the entire screen and causing the screen and individual images to flicker.
    - Fix - I changed the overlay to to 'display : none;' and hover to 'display : inline-block;'

- ### Contact - Message box was single line and text not wrapping within the box.
    - Fix - I used a bootstrap input template and adjusted the styling to match the other input fields on the page.

![Contact](/assets/images/readme_images/messagebx_notwrap.png)

- ### Contact - Message box line spacing issue.
    - Fix - I created a custom css class to adjust
![Contact](/assets/images/readme_images/messagebx_linespc.png)

- ### Gallery - Images provided by the artist were all different sizes
    - Fix - I manually adjusted the size each image in photoshop to match



- ### Carousel - Images of varyting sizes reacting differently when on different devices
    - Fix - Create custom banners of the same size with a central image which is shown on mobile and the side images visable on larger screens.

  ![Index](/assets/images/readme_images/testcarousel.png)



- ### Contact - Animated label transitionY
    - I followed a youtube tutorial which contained an animated label which sat within the input filed and glided up when text was entered into the text box.  The issue arose when clicking into the next field and the label would then glide down back into the box and obsure the newly entered text.
    - Fix - I could not find a way to get the label text to stay in place. So I removed the label completely and replaced with placeholder text.

### Original
![Contact](/assets/images/readme_images/contactform.png)

### Fix


## Unfixed Bugs
- Contact Page - The message box had to be customised in order to create a larger input field and text wrap.  After using a bootstrap template and custom stying the box, I was unable to recreate the same placeholder text transition as the other input fields.  
Due to the expandable nature of the bootstrap template, I was not able to find a work around that would allow for a variable transition based on the size of the expansion.
- works.html - html validator returning issue with modal width value.
![Modal](/assets/images/readme_images/modalwidtherror.png)
By altering the value as suggested in the error, the image no longer filled the full width and height of the modal.  Leaving the error as is doesn't appear to impact performance of functionality in any way I made a decision to leave as is.


# Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
- The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html


# Credits
All images and artworks were designed and provided by the artist.  Bootstrap was used for some design elements including modal and grid system as well as a youtube tutorial for the sign up form.

## Content
- Contact Form - The contact form of my site was heavily influenced by the following tutorial https://www.youtube.com/watch?v=s6rF1Josk9M However, I customised some of the styling. In particular, the message box which only allowed for a single line of text and did not text-wrap so this was replaced with my own code.
- Navbar - Navbar is a Bootstrap template with custom css
- Icons - Instagram icon taken from font awesome
- Logo and Artworks - These are original pieces design and provided by the artist, Gaia Dipilato
- Carousel - Bootstrap template with custom media query
- Gallery - Boostrap grid template with custom borders, overlay, shadows and labels
- Modal - Bootstrap modal template added to gallery with some custom sizing and css 
## Media

- Logo, Artworks and Photos - These are original pieces design and provided by the artist, Gaia Dipilato.

