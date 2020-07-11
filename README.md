This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

If you don’t have NodeJS and json-server you need to install them first:

NodeJS: https://nodejs.org/en/

json-server: `npm install json-server`

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `json-server --watch db.json --port 8000`

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

Open [http://localhost:8000/articles](http://localhost:8000/articles) to see the articles endpoint.

<pre>
  {
    id: 1,
    category_id: 1,
    user_id: 1,
    title: "string",
    description: "string",
    image: "string"
  }
</pre>

Open [http://localhost:8000/categories](http://localhost:8000/categories) to see the categories endpoint.

<pre>
  {
    id: 1,
    title: "string",
    parent_id: 1
  }
</pre>

Open [http://localhost:8000/users](http://localhost:8000/users) to see the users endpoint.

<pre>
  {
    id: 1,
    username: "string",
    password: "string"
  }
</pre>
