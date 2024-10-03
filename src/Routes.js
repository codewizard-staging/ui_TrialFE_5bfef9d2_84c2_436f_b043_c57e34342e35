import React from "react";
import { Routes, Route } from "react-router-dom";
import {
StageCreate, StageEdit, StageView, 
Stages
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Stages/view/:id" element={<StageView {...props} title={'View Stage'} />} />
                        <Route path="Stages/edit/:id" element={<StageEdit {...props} title={'Edit Stage'} />} />
                        <Route path="Stages/create" element={<StageCreate {...props} title={'Create Stage'} />} />
                                                <Route path="/" element={<Stages {...props} title={'Table Layout'} nolistbar={true} />} />

                <Route path="/table" element={<Stages {...props} title={'Table Layout'} />} />
        </Routes>
    )

};

export default Component;