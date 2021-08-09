import React, { useState, useEffect, useRef } from 'react';
import './share-socials.scss';
import Button from '../buttons/button.component';
import SvgIcon from '../svg-icon/svg-icon.component';

const ShareSocialsButton = props => {
    const { link, btnClass } = props;
    const [isOpen, setOpen] = useState();
    const mainDiv = useRef();

    const toggleList = () => {
        setOpen(!isOpen);
    };

    const shareFacebook = link => {
        window.open('https://www.facebook.com/dialog/share?app_id=177368329365556&href=' + link, 'facebook-share-dialog', 'width=626,height=436');
    };

    const shareTwitter = link => {
        window.open('http://twitter.com/share?link=' + link, 'twitter-share-dialog', 'width=626,height=436');
    };

    useEffect(() => {
        function handleClickOutside(e) {
            if (mainDiv.current.contains(e.target)) {
                // inside click
                return;
            }
            // outside click
            setOpen(false);
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={btnClass} onClick={() => toggleList()} ref={mainDiv}>
            <span>
                <SvgIcon icon="share" /> Share
            </span>{' '}
            <div className="count">1.2K</div>
            <div className={`share-list ${isOpen ? 'open' : ''}`}>
                <li
                    className="share-item"
                    onClick={e => {
                        shareFacebook(link);
                    }}
                >
                    <div className="icon-holder facebook">
                        <SvgIcon icon="icon-facebook" />
                    </div>
                    <p>Facebook</p>
                </li>
                <li
                    className="share-item"
                    onClick={e => {
                        shareTwitter(link);
                    }}
                >
                    <div className="icon-holder twitter ">
                        <SvgIcon icon="icon-twitter" />
                    </div>
                    <p>Twitter</p>
                </li>
            </div>
        </div>
    );
};

export default ShareSocialsButton;
