import React, { useState } from 'react';

import { AiFillLike } from 'react-icons/ai';
import { SocialCardsProps } from '../social-network-cards.component';

const FacebookCard: React.FC<SocialCardsProps> = ({
    description,
    image,
    author,
    post,
}): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const setCommentsSectionActive = (): void => {
        if (post.comments?.length! < 1) return;
        setIsActive(!isActive);
    };

    const calculateCommentsSectionHeight = (): { maxHeight: number } => {
        const box = document.querySelector(
            '.facebook-card--all-comments'
        ) as HTMLElement;

        return {
            maxHeight: box.scrollHeight + 35,
        };
    };

    return (
        <div className='facebook-card'>
            <div className='facebook-card--header'>
                <div className='facebook-card--author--img'>
                    <div style={{ backgroundImage: `url(${author.image})` }} />
                </div>
                <div className='facebook-card--author'>
                    <p>{author.name}</p>
                    <span>{post.published}</span>
                </div>
            </div>
            <div className='facebook-card--content'>
                <p>{description}</p>
            </div>
            {image && (
                <div className='facebook-card--image'>
                    <div style={{ backgroundImage: `url(${image})` }} />
                </div>
            )}
            <div className='facebook-card--info'>
                <div className='facebook-card--likes'>
                    <span className='facebook-card--likes--round-wrap'>
                        <AiFillLike />
                    </span>
                    <p className='facebook-card--likes--count'>
                        {post.likes > 0 ? post.likes : 0}
                    </p>
                </div>

                <div
                    className={`facebook-card--comments ${
                        post?.comments?.length! < 1 &&
                        'facebook-card--comments-disabled'
                    }`}
                    onClick={setCommentsSectionActive}
                >
                    <p>
                        {post?.comments?.length! > 0
                            ? post.comments?.length
                            : 0}{' '}
                        comments
                    </p>
                </div>
            </div>
            {post?.comments?.length! > 0 && (
                <div
                    className={`facebook-card--all-comments ${
                        isActive && 'facebook-card--all-comments-active'
                    }`}
                    style={isActive ? calculateCommentsSectionHeight() : {}}
                >
                    {post.comments?.map((item, i) => (
                        <div
                            key={i}
                            className='facebook-card--all-comments--item'
                        >
                            <span>{item.author}</span>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FacebookCard;
