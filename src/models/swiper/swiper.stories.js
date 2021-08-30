import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import CustomSwiper from './swiper.component';

const arr = [
    {
        name: 'Slide 1',
        img: 'https://randomwordgenerator.com/img/picture-generator/5fe8dc434253b10ff3d8992cc12c30771037dbf85254794174267cd09148_640.jpg',
    },
    {
        name: 'Slide 2',
        img: 'https://randomwordgenerator.com/img/picture-generator/55e6dc4a5754a809ea898279c02132761022dfe05b58714f742d73d0_640.jpg',
    },
    {
        name: 'Slide 3',
        img: 'https://randomwordgenerator.com/img/picture-generator/57e1d1404e5bb10ff3d8992cc12c30771037dbf852547941742679d0924f_640.jpg',
    },
    {
        name: 'Slide 4',
        img: 'https://randomwordgenerator.com/img/picture-generator/chair-1840011_640.jpg',
    },
    {
        name: 'Slide 5',
        img: 'https://randomwordgenerator.com/img/picture-generator/54e9d7464b55a514f1dc8460962e33791c3ad6e04e507441722973d49548c4_640.jpg',
    },
    {
        name: 'Slide 6',
        img: 'https://randomwordgenerator.com/img/picture-generator/54e0d04a4c5ba414f1dc8460962e33791c3ad6e04e507440722d72d59345c2_640.jpg',
    },
];

const imgStyle = {
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
};

const wrap = {
    width: '100%',
    height: '340px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const overlay = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const fontType = {
    fontSize: '22px',
    fontWeight: 600,
    color: 'white',
};

const SlidersArray = ({ array }) =>
    array.map((item, index) => (
        <div key={index} className='swiper-slide' style={wrap}>
            <div
                style={{ backgroundImage: `url('${item.img}')`, ...imgStyle }}
            ></div>
            <div style={overlay}>
                <p style={fontType}>{item.name}</p>
            </div>
        </div>
    ));

storiesOf(`Designs/Models`, module)
    .addDecorator(withKnobs)
    .add('Swiper', () => (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-8'>
                        <h3
                            style={{
                                textAlign: 'center',
                                marginBottom: '20px',
                            }}
                        >
                            Picturs taken from{' '}
                            <a
                                style={{ color: '#1693c5' }}
                                href='https://randomwordgenerator.com/picture.php'
                                target='_blank'
                            >
                                Random generator
                            </a>
                        </h3>
                        <CustomSwiper
                            wrapClass={text('Wrapper class', '')}
                            containerClass={text('Container class', '')}
                            parentWrapperClass={text(
                                'Parent Wrapper class',
                                ''
                            )}
                            noBootstrap={boolean('Disable bootstrap', false)}
                            params={object('Additional swiper params', {})}
                        >
                            <SlidersArray array={arr} />
                        </CustomSwiper>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ));
