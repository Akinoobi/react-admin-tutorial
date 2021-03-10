import * as React from "react";
import {List, Datagrid, TextField, ReferenceField, EditButton} from 'react-admin';
import PostFilter from "../Filter/PostFilter";

const PostList: React.FC = (props) => {
    return (
        <List filters={<PostFilter/>} {...props}>
            <Datagrid rowClick='edit'>
                <TextField source='id'/>
                <ReferenceField source='userId' reference={'users'}>
                    <TextField source={'name'}/>
                </ReferenceField>
                <TextField source='title'/>
                <EditButton/>
            </Datagrid>
        </List>
    );
};

export default PostList;
