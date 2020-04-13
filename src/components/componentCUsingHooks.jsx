import React, {useContext} from 'react';
import { ChannelContext, UserContext } from '../App';

function ComponentUsingContextViaHooks() {

const user = useContext(UserContext);
const channel = useContext(ChannelContext);

    return (
        <div>
         <p> THis is coming from Component using react context hooks </p>
         {user.name} {user.age} {channel.salary}
        </div>
    );
}

export default ComponentUsingContextViaHooks;