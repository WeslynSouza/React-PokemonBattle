import React from 'react'
import Grid from '../layout/grid'

export default props =>{

    //Em construção ainda 

    return(
    <Grid cols='12 12'>
        <div className='box box-solid'>
            <div className='box-body'>
                <div id='carousel-slide' className='carousel slide' data-ride='carousel'>

                    <ol className='carousel-indicators'>
                        <li data-target='#carousel-slide' data-slide-to='0'></li>
                        <li data-target='#carousel-slide' data-slide-to='1' className='active'></li>
                        <li data-target='#carousel-slide' data-slide-to='2'></li>
                    </ol>

                    <div className='carousel-inner' role='listbox'>
                        <div className='item'>
                            <img src='https://wallpaperplay.com/walls/full/b/b/6/101774.jpg' height='500' alt='Primeiro'></img>
                            <div className='carousel-caption'>Primeiro</div>
                        </div>
                        <div className='item active'>
                            <img src='https://wallpaperplay.com/walls/full/a/3/5/101780.jpg' alt='Segundo'></img>
                            <div className='carousel-caption'>Segundo</div>
                        </div>
                        <div className='item'>
                            <img src='https://wallpaperplay.com/walls/full/0/b/e/101799.jpg' height='500px' alt='Terceiro'></img>
                            <div className='carousel-caption'>Terceiro</div>
                        </div>
                    </div>

                    <a className='left carousel-control' href='#carousel-slide' role='button' data-slide='prev'>
                        <span className='fa fa-angle-left'></span>
                    </a>
                    <a className='right carousel-control' href='#carousel-slide' role='button' data-slide='next'>
                        <span className='fa fa-angle-right'></span>
                    </a>
                </div>
            </div>
        </div>
    </Grid>
)
}