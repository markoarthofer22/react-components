/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { InstagramCardStyles } from './styles';

import { ISocialCardsProps } from '../social-network-cards.component';

const InstagramCard: React.FC<ISocialCardsProps> = ({
    title,
    description,
    image,
    author,
    post,
    className = 'instagram-card',
}): JSX.Element => {
    const theme = useTheme();

    return (
        <div css={InstagramCardStyles(theme)} className={`${className}`}>
            <div className={`${className}--header`}>
                <span>
                    <img
                        alt=''
                        src={author.avatarLink}
                        className={`${className}--user-image`}
                    />
                    <a
                        className={`${className}--user-name`}
                        href={`https://www.instagram.com/${author.name}`}
                    >
                        {author.name}
                    </a>
                </span>
                <div className={`${className}--time`}>{post.published}</div>
            </div>

            {image && (
                <div className={`${className}--image`}>
                    <div style={{ backgroundImage: `url(${image})` }} />
                </div>
            )}

            <div className={`${className}--content`}>
                <div className={`${className}--main`}>
                    <p className={`${className}--likes`}>{post.likes} likes</p>
                    {title && <h4>{title}</h4>}
                    <p>
                        <a
                            className={`${className}--content-user`}
                            href={`https://www.instagram.com/${author.name}`}
                        >
                            {author.name}
                        </a>
                        {description}
                    </p>
                </div>
                <div className={`${className}--footer`}>
                    <p className={`${className}--comments`}>
                        Go over {post.commentsTotal} comments
                    </p>
                    {post.comments?.map((item, i) => (
                        <div key={i} className={`${className}--user-comment`}>
                            <a href='https://www.instagram.com/'>
                                {item.author}
                            </a>
                            <p>{item.content}</p>
                        </div>
                    ))}
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default InstagramCard;
