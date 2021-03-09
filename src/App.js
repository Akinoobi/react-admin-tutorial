import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {Admin, Resource, ListGuesser} from "react-admin";
import UserList from "./users";
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList} />
    </Admin>
);

export default App;
