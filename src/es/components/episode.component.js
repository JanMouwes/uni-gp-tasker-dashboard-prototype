import React from 'react';
import PropTypes from 'prop-types';
import Level from "./level.component";

function Episode({title, levels = []}) {

    const content = levels.map(level => <Level tasks={level.tasks} title={level.title}/>)

    return <section>
        <h3>{title}</h3>
        {content}
    </section>
}

Episode.propTypes = {
    title: PropTypes.string.isRequired,
    badge: PropTypes.string,
    levels: PropTypes.array
};

export default Episode;