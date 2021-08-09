import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstagramUser } from '../../redux/instagram/instagram.actions';
import { selectInstagramUser } from '../../redux/instagram/instagram.selectors';
import './instagram.scss';
import Swiper from 'react-id-swiper';
import _ from 'underscore';
import SvgIcon from '../svg-icon/svg-icon.component';

const InstagramFeed = props => {
    const dispatch = useDispatch();
    const userData = useSelector(selectInstagramUser);

    const params = {
        slidesPerView: 'auto',
        autoplay: {
            delay: 6000
        },
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };

    function returnImage(image) {
        return {
            backgroundImage: "url('" + image + "')"
        };
    }

    //call on mount
    useEffect(() => {
        dispatch(fetchInstagramUser(userID));
    }, []);

    const { userID, title } = props;
    const { biography, edge_owner_to_timeline_media: gallery, full_name } = userData;

    return !_.isEmpty(userData) ? (
        <div className="instagram">
            <h1 className="title">{title}</h1>
            <div className="row">
                <div className="col-sm-12">
                    <div className="holder">
                        <Swiper {...params}>
                            {gallery.edges.map((item, index) => {
                                const { display_url: url, edge_liked_by: likes, location, edge_media_to_caption: caption } = item.node;

                                return (
                                    <div className="col-sm-3" key={index}>
                                        <div className="card-instagram">
                                            <div className="img-container">
                                                <div className="img" style={returnImage(url)} />
                                            </div>
                                            <div className="text-content ">
                                                <span className="liked">
                                                    <SvgIcon icon="icon-heart" />
                                                    {likes.count}
                                                </span>
                                                {/* <span className="caption">
                                                    {caption.edges[0].node.text}
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default InstagramFeed;
