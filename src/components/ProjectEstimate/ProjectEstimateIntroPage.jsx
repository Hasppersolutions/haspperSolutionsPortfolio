import React, {useState} from 'react';
import { ProjectEstimateIntro } from './ProjectEstimateIntro';
import { ProjectEstimate } from './ProjectEstimate';

export const ProjectEstimatePage = () =>{

    return(
        <>
        <ProjectEstimateIntro/>
        <ProjectEstimate/>
        </>
    );
};