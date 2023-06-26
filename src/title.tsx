import React from 'react';

const Title = () => {
    const title = React.createElement('h1', null, 'Quizes For Boredom');

    const subTitle = React.createElement('h2', null, 'When You Run Out of Things to Do, We Got Your Back!')

    return React.createElement('nav', null, title, subTitle);
}

export default Title;