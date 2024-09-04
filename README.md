# React + Vite

## Running the site

1. Clone the repository to your machine using the following command in your terminal/command prompt: ```git clone https://github.com/tarikmaljanovic/biom-task.git```
2. Go to the directory in your terminal/command prompt (```cd biom-task```), or open the project folder in your IDE
3. Install all the dependencies by running the following command: ```npm i```
4. Once all the dependencies are installed, run the following command: ```npm run dev```
5. The site can be found at ```http://localhost:5173/``` (Vite's default port)

## Tech Stack

1. React (Vite.js)
2. Framer Motion
3. SASS
4. Material UI

## Development Process

I started out with the project by analysing the design and dividing it into components, starting from the navigation bar and ending with the footer. Each component was implemented and styled one by one by creating the desktop design,
coding the behaviour and then dealing with responsiveness. I enjoyed implementing the animations and playing with tools provided by framer motion to create animations that would be otherwise long and difficult to develop. However, dealing
with images, their positioning in different viewport dimentions and comming up with mobile and tablet designs was less interesting. The only issue I faced was with the scrolling of the images above the footer where the images didn't scroll
horizontally. The approach was to manipulate the ```scrollLeft``` property of the contanier by using its reference through the ```useRef``` hook. However, it never worked on the first render. Estimately, it took 2 days to complete the project.


