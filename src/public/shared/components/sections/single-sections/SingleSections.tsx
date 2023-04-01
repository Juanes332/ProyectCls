import React from 'react';
import './SingleSections.scss';
import {IImgOptions} from "../../../models/dataPage/IImgOptions";

interface Props {
    title: string;
    description?: string;
    list?: string[];
    imgOptions?: IImgOptions;
}

const SingleSections: React.FC<Props> = ({ list, title, imgOptions, description  }) => {

    // --------inicio estados--------
    // --------fin estados--------

    // --------hooks--------
const a = new DOMParser().parseFromString('<div>Tienes cédula de ciudadanía.\nRealiza las solicitudes con cédula de extranjería en nuestros canales presenciales.</div>', 'text/html').body.textContent;
console.log('es: ', a)
    // --------fin hooks-------

    // --------metodos--------
    const loadImg = (): string =>
        imgOptions?.img ?
            require(`../../../../assets/images/${imgOptions?.img}`).default :
            "";

    const renderList = () =>
        list?.map((item, index) => {
            return (
                <li style={{ listStyle: imgOptions?.img ? 'none' : 'disc' }}
                    key={index}
                    className='single-sections-list-single'>
                    {
                        imgOptions?.img ?
                            <div className='single-sections-list-single-content'>
                                <img alt={imgOptions.imgAlt} src={ loadImg() } />
                                <p className='single-sections-list-single-text'>
                                    { item }
                                </p>
                            </div> :
                            <p className='single-sections-list-single-text'>
                                { item }
                            </p>
                    }
                </li>
            );
        });
    // --------fin de metodos--------

    // --------retorno de componente
    return (
        <div className="single-sections margin-bt-15">
            <h2 className="single-sections-title">
                { title }
            </h2>
            <p className="single-sections-description">
                { description }
            </p>

            { renderList() }
        </div>
    );
};

export default SingleSections;