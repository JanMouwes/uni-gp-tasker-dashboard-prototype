import React from 'react';
import Task from "../src/es/components/task.component";
import "bootstrap/dist/css/bootstrap.css";
import Level from "../src/es/components/level.component";
import Episode from "../src/es/components/episode.component";

export default {title: 'Dashboard'};

export const taskItem = () => <div className="p-3 d-flex">
    <Task
        description="This is a description"
        isCompleted={true}
        className=""
        duration={2}
    />
</div>;
export const levelItem = () => <div className="p-3 bg-light">
    <Level
        title="Level 1"
        tasks={[
            {description: "test description", duration: 2, isCompleted: true},
            {description: "lorem ipsum dolor sit amet consectetur", duration: 2},
        ]}
    />
</div>;
export const episodeItem = () => <div className="p-3 bg-light">
    <Episode
        title="Code Chipmunk"
        levels={[
            {
                title: "Level 1", tasks: [
                    {description: "test description", duration: 2, isCompleted: true},
                    {description: "lorem ipsum dolor sit amet consectetur", duration: 2},
                    {description: "lorem ipsum dolor sit amet consectetur", duration: 2},
                    {description: "lorem ipsum dolor sit amet consectetur", duration: 2},
                ]
            },
            {
                title: "Level 2", tasks: [
                    {description: "test description", duration: 2, isCompleted: true},
                    {description: "lorem ipsum dolor sit amet consectetur", duration: 2},
                ]
            }
        ]}
    />
</div>;
