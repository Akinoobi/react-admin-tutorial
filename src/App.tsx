import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {Admin, Resource} from 'react-admin';
import UsersList from "../src/users";
import { PostEdit, PostCreate} from "./post/posts";
import  PostList from "./post/List/PostsList";
import PostIcon from '@material-ui/icons/Book';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = ({children}: { children?: any }) => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
            <Resource name='users' list={UsersList}/>
        </Admin>
    );
};

export default App;
