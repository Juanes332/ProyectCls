import React from 'react';
import {useAppSelector} from "../../redux/useRedux";
import {RootState} from "../../redux/store";
import {ISection} from "../../models/dataPage/ISection";
import SingleSections from "./single-sections/SingleSections";
import Form from "../form/Form";
import './Sections.scss';

const Sections = () => {
    // --------inicio estados--------
    // --------fin estados--------

    // --------hooks--------
    const sections: ISection[] = useAppSelector((state:RootState) => state.page.body.sections);
    // --------fin hooks-------

    // --------metodos--------
    const renderSections = () =>
        sections.map((section: ISection, idx: number) =>
            (
                <SingleSections
                    title={section.title}
                    description={section.description}
                    list={section.list}
                    imgOptions={section.imgOptions}
                    key={idx}
                />
            )
        );

    // --------fin de metodos--------

    // --------retorno de componente
    return (
        <div className='sections-container'>
            <div className="contenedor">
                <div className='grid columna-tablet columna-desktop'>
                    <div className='columna-4 columna-tablet-8 columna-desktop-6 sections'>
                        { renderSections() }
                    </div>
                    <div className='columna-4 columna-tablet-8 columna-desktop-6 sections-form'>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sections;