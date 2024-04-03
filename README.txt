In the head part, I add title and favion.
Favion is from 
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allforpets.ca%2Ffavicon%2F&psig=AOvVaw2MrNJbKzcwj9fTwWu6Mcm0&ust=1707589775276000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjumOHxnoQDFQAAAAAdAAAAABAE

For index.html part, I used a sidebar for obtain the links by click on each of the animal name it will jump to that page.
I used h1 for the header, state the main page and use a <p> for add short information. 
I add a background image into the body part, and this image is from 
https://www.istockphoto.com/essential/photo/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent-gm1296353202-389801058.

For the Cat.html part, I used image, table and external video.
https://www.youtube.com/embed/dSH_N6Gdlp4?si=BK9x4ETEdHP3jOdw
Most of the information are get from Wikipedia and searched by myself and I also get image from this
https://en.wikipedia.org/wiki/Black-footed_cat. 
width of 400 and height of 600.

For the Dog.html part, I used image and sounds.
Image 2: 
https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rover.com%2Fblog%2Fbreeds%2Fborder-collie%2F&psig=AOvVaw2LcpCFObDBbfU2V9shsLTA&ust=1707591291258000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNCMpLT3noQDFQAAAAAdAAAAABAD
width of 900 and height of 600.
Sounds:
https://www.pond5.com/search?kw=border-collie&media=sfx
https://www.soundsnap.com/tags/border_collie
I linked this page to the Wikipedia https://en.wikipedia.org/wiki/Border_Collie.

For the Rabbit.html part, I used images and video.
Image 3:
get from https://en.wikipedia.org/wiki/Miniature_Lop
width of 400 and height of 600.
Image 4:
get from https://en.wikipedia.org/wiki/Miniature_Lop
width of 500 and height of 600.
Video:
get from https://www.istockphoto.com/video/two-hollandlop-bunny-takecare-together-and-play-gm1419838732-466057394?utm_campaign=srp_videos_10&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fvideos%2Fmini%2520lop%2F%3Fpage%3D4&utm_medium=affiliate&utm_source=pexels&utm_term=mini+lop
width="400" height="300"

For the last Parrot.html part, I used external image and sound, this is a quite simple page.
https://th-thumbnailer.cdn-si-edu.com/c-oIGb8iD8GOcITujFjR9NyNuGk=/800x450/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/81/19/81199c94-e8aa-4438-9db5-0d76b77ec2ee/istock_000014986932_medium.jpg
I set the image size almost the same to the webpage size.
Sound:
from https://www.google.com/search?q=blue+macaw+parrots+sound&sca_esv=9b423b9cf11163a7&hl=zh-CN&biw=1536&bih=776&tbm=vid&ei=Q2DFZeafLOaA5OMPgf-k8A0&ved=0ahUKEwimzYXB75yEAxVmAHkGHYE_Cd4Q4dUDCA0&uact=5&oq=blue+macaw+parrots+sound&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhhibHVlIG1hY2F3IHBhcnJvdHMgc291bmQyCBAAGIAEGKIESKYIUABYAHAAeACQAQCYAXGgAXGqAQMwLjG4AQPIAQD4AQL4AQE&sclient=gws-wiz-video#fpstate=ive&vld=cid:5fc00f4c,vid:EpAB7O_CmYI,st:0

All above are from A1 and mainly for references so that I do not need to rewrite them again, and I will add A2 part in the following:
Compare to the A1, I add ID and change container name in HTML, delate the style part and create style.css

In my style sheet:
For index.html, it is from h1 to #main-p in style sheet.
For Cat.html and Dog.html, it is from #sec-h1 to #wiki:hover in style sheet.
For Rabbit.html, it is from #body3 to .contain video in style sheet.
For Parrot.html, it simply #parrot in style sheet.

h1: Styles the heading level 1 elements.
#main-body: Styles the main body section of the webpage. 
Sets a background image and sets the background size to cover the entire area.
Specifies the font family as Times New Roman.
#main-nav: Styles the main navigation section, with padding: 10px and margin: 0.
.sidebar ol: Styles an ordered list inside the sidebar.
Adds padding of 20 pixels.
Sets margin to 0.
Specifies the list style type as georgian.
Utilizes flexbox to display the list items vertically centered.
in the sidebar, sets margin-bottom to 30 pixels and text color to white, with underline text decoration while hover.
I use @keyframes colorChange for a more fancy <p>, from red to yellow to blue to purple to green, over a duration of 5 seconds, it repeats infinitely.

#sec-h1 a bit similar to h1, but sets text alignment to center, background color is antique white and text color to black.
.contains: Styles a container element using CSS Grid.
#cat and #dog: Styles images of cats and dogs, with settings relate to border and hover(Scales them and adds a box shadow).
.contains table: Styles tables within the container.
Removes default margins and collapses borders.
Specifies a width and adds transitions for scaling and box-shadow on hover.
.contains table th and .contains table td: Styles of the table.
.contains iframe: Styles iframes within the container.
#second-b: Styles the second body section, with a font family and background color.
#sec-nav: Styles the navigation section within the second body section.
Sets background color and padding.
Aligns text to the center.
a:hover: Styles links on hover by changing the color to red.
nav > a, nav a + a: Styles navigation links and adjacent links.
nav a::before and nav a::after: Styles pseudo-elements before and after navigation links.
.black-text and .white-text: Styles text color, with change text color black and white one by one.
ol: Styles ordered lists.
Sets margins and positions them relative to the left edge.
button and button:hover: Styles buttons and hover states.
Sets background color, border, padding, font size, and transition effects.
#wiki and #wiki:hover: Styles a specific element and its hover state.
Sets background color, scale transformation, and box shadow for this button.

The rest settings are about Rabbit.html, I use grid area.
I change the setting of the button because I use different setting of the header.
For the image, I set different border color and same border radius and align-items: center.
I add a fancy hover for #Rabbit2, filter: grayscale(50%) brightness(150%) contrast(300%), with transition: filter 0.5.
.contain video: Styles videos within the container.
Sets width to 100% and adjusts height automatically. Adds margin to the top. Also in the center.

For #parrot simply used the information from the <style> in A1.

All above are from A1 and A2, mainly for references so that I do not need to rewrite them again, and I will add A3 part in the following:
Most of A3 part is I added a separate js file.
Firslty, I create a notification of first open my webpage with localStorage so that it will not show up again and again.
I create a function checkAnimal() relate to the animals that show in the sidebar, interact with the user. As well as related HTML codes in index.html.
Then it comes to a form, I added codes in HTML first, then I added related CSS code which are start with ".form..." and ".button...".
I use array for contains cat, dog, rabbit and parrot and used "toLowerCase()" to make sure and easier for user.
This will check if entered animal show up or not and return have information or not.
I create a function for the form with if blank show alert by notification and when everything answered corrected show "form submitted".
Inside, I used ifelse for testing each conditions, such as when petName is empty alert "Please fill in the pet name." 
The remaining codes in js are all about color.
In CSS file, I added Mobile, Table and Desktop which are for my webpages to show better in different devides, and I leave desktop part blank for simply use original settings.
Because of the settings related to color, I also added many button settings in CSS file.
I used toggle, by creating new settings in CSS file (such as "body.light-green-bg .contains") and use new settings to change original settings.
In the horror part I added a filter: contrast(150%) brightness(80%) sepia(50%) hue-rotate(180deg) saturate(200%) for image, this will show the beauty of the cat eyes.
I use white background color for contrast to other buttons that I created in A2.
when on hover, it will show color related to my setting color.
For example, a button change background color to lightgreen, when it is on hover will show lightgreen.
And I added related HTML codes, as well as link my js file to all of my html files.
I adjust the style (such as button and text) in the rabbit.html, so that it match to other pages and allow me to make change.