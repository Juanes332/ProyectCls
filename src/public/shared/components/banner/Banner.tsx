import * as React from 'react';
import {useAppSelector} from "../../redux/useRedux";
import {RootState} from "../../redux/store";
import './Banner.scss'

const Banner = () => {

    // --------inicio estados--------
    // --------fin estados--------

    // --------hooks--------
    const banner = useAppSelector((state:RootState) => state.page.banner[0]);
    // --------fin hooks-------

    // --------metodos--------
    // --------fin de metodos--------

    // --------retorno de componente
    return (
      <div className='banner' style={{ backgroundImage: `url(${banner?.background})` }}>
        <div className='contenedor'>
            <div className='grid columna-tablet columna-desktop'>
                <div className='columna-4 columna-tablet-8 columna-desktop-6 banner-content'>
                    <h1 className='banner-content-title'>{banner?.title}</h1>
                    <p className='margin-tp-15'>
                        {banner?.description}
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Banner;