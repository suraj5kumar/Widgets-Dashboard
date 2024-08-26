# Dashboard Page

A dashboard page created in React in which user can see different widgets of different categories.    
They can also add, remove and search for widgets.
## Run the project Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd Dashboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Data Information

In this project I have used a json file to store the data which will render first time after opening the window.  
  
Then I have stored all data into session storage of browser and manipulate that from there so that user can see the changes that they made in their entire session.  
  
I am using context API to make changes dynamically from any component.

Adding or removing does not affect the original data.  

For the real world application we need to use a query language and APIs from backend to make changes into the original data.