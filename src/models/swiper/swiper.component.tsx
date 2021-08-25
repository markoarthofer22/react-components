import React from 'react';
import Swiper from 'react-id-swiper';

interface SwiperProps {
    params?: object;
    children: JSX.Element;
    wrapClass?: string;
    containerClass?: string;
    parentWrapperClass?: string;
    noBootstrap?: boolean;
    activeSlideKey?: string;
}

const CustomSwiper: React.FC<SwiperProps> = (props): JSX.Element => {
    const {
        params,
        children,
        wrapClass,
        containerClass,
        parentWrapperClass,
        noBootstrap,
        activeSlideKey,
    } = props;

    const options = {
        slidesPerView: 'auto' as const,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            speed: 600,
        },
        ...params,
    };

    return (
        <div
            className={`${parentWrapperClass || 'holder'} ${
                noBootstrap ? '' : 'row'
            }`}
        >
            <Swiper
                activeSlideKey={activeSlideKey}
                wrapperClass={`swiper-wrapper ${wrapClass || ''}`}
                containerClass={`swiper-container ${containerClass || ''}`}
                {...options}
            >
                {children}
            </Swiper>
        </div>
    );
};

export default CustomSwiper;
