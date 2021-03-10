import * as React from "react";
import { TextInput, ReferenceInput,  Filter, SelectInput} from 'react-admin';

const PostFilter: React.FC = (props) => {
    return (
        <Filter {...props}>
            <TextInput label={'Search'} source='q' alwaysOn/>
            <ReferenceInput label='User' source='userId' reference={'users'} allowEmpty>
                <SelectInput optionText={'name'}/>
            </ReferenceInput>
        </Filter>
    )
};
export default PostFilter
