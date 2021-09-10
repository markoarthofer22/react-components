import React from 'react';

import { SocialCardsProps } from '../social-network-cards.component';

const InstagramCard: React.FC<SocialCardsProps> = ({
    title,
    description,
    image,
    author,
    post,
}): JSX.Element => (
    <div className='instagram-card'>
        <div className='instagram-card--header'>
            <span>
                <img
                    alt=''
                    src={author.avatarLink}
                    className='instagram-card--user-image'
                />
                <a
                    className='instagram-card--user-name'
                    href={`https://www.instagram.com/${author.name}`}
                >
                    {author.name}
                </a>
            </span>
            <div className='instagram-card--time'>{post.published}</div>
        </div>

        {image && (
            <div className='instagram-card--image'>
                <div style={{ backgroundImage: `url(${image})` }}></div>
            </div>
        )}

        <div className='instagram-card--content'>
            <p className='instagram-card--likes'>{post.likes} likes</p>
            {title && <h4>{title}</h4>}
            <p>
                <a
                    className='instagram-card--content-user'
                    href={`https://www.instagram.com/${author.name}`}
                >
                    {author.name}
                </a>
                {description}
            </p>
            <p className='instagram-card--comments'>
                Go over {post.commentsTotal} comments
            </p>
            {post.comments?.map((item, i) => (
                <div key={i} className='instagram-card--user-comment'>
                    <a href='https://www.instagram.com/'>{item.author}</a>
                    <p>{item.content}</p>
                </div>
            ))}
            <hr />
        </div>
    </div>
);

export default InstagramCard;
