import React from 'react';

function TitleComponent({title}) {

console.log('rendering TitleComponent');
    return (
        <div>
          {title}
        </div>
    )
}

export default React.memo(TitleComponent);