/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useTheme } from '@emotion/react';

import { AiFillLike } from 'react-icons/ai';
import { ISocialCardsProps } from '..';

import { FacebookCardStyles } from './styles';

const FacebookCard: React.FC<ISocialCardsProps> = ({
    description,
    image,
    author,
    post,
    className = 'facebook-card',
}): JSX.Element => {
    const theme = useTheme();

    const [isActive, setIsActive] = useState<boolean>(false);

    const setCommentsSectionActive = (): void => {
        if (post?.comments?.length! < 1) return;
        setIsActive(!isActive);
    };

    const calculateCommentsSectionHeight = (): { maxHeight: number } => {
        const box = document.querySelector(
            `.${className}--all-comments`
        ) as HTMLElement;

        return {
            maxHeight: box.scrollHeight + 35,
        };
    };

    return (
        <div css={FacebookCardStyles(theme)} className={`${className}`}>
            <div className={`${className}--header`}>
                <div className={`${className}--author--img`}>
                    <div style={{ backgroundImage: `url(${author?.image})` }} />
                </div>
                <div className={`${className}--author`}>
                    <p>{author?.name}</p>
                    <span>{post?.published}</span>
                </div>
            </div>
            <div className={`${className}--content`}>
                <p>{description}</p>
            </div>
            {image && (
                <div className={`${className}--image`}>
                    <div style={{ backgroundImage: `url(${image})` }} />
                </div>
            )}
            <div className={`${className}--info`}>
                <div className={`${className}--likes`}>
                    <span className={`${className}--likes--round-wrap`}>
                        <AiFillLike />
                    </span>
                    <p className={`${className}--likes--count`}>
                        {post && post.likes > 0 ? post?.likes : 0}
                    </p>
                </div>

                <div
                    className={`${className}--comments ${
                        post?.comments?.length! < 1 &&
                        `${className}--comments-disabled`
                    }`}
                    onClick={setCommentsSectionActive}
                >
                    <p>
                        {post?.comments?.length! > 0
                            ? post?.comments?.length
                            : 0}{' '}
                        comments
                    </p>
                </div>
            </div>
            {post?.comments?.length! > 0 && (
                <div
                    className={`${className}--all-comments ${
                        isActive && `${className}--all-comments-active`
                    }`}
                    style={isActive ? calculateCommentsSectionHeight() : {}}
                >
                    {post?.comments?.map((item, i) => (
                        <div
                            key={i}
                            className={`${className}--all-comments--item`}
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
