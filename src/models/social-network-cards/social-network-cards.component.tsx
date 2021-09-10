import React from 'react';
import FacebookCard from './facebook/facebook.component';
import InstagramCard from './instagram/instagram.component';

type CardType = 'instagram' | 'custom' | 'facebook';

interface Post {
    likes: number | string;
    commentsTotal: number | string;
    published?: string;
    comments?: [
        {
            author: string;
            content: string;
        }
    ];
}

export interface SocialCardsProps {
    title?: string;
    description: string;
    image?: string;
    author: {
        name: string;
        avatarLink?: string;
        image?: string;
    };
    isHorizontal?: boolean;
    type: CardType | CardType[];
    post: Post;
    children?: React.ReactNode;
}

const SocialCards: React.FC<SocialCardsProps> = (props): JSX.Element => {
    const { type, children, isHorizontal = false } = props;

    const renderBasedOnType = (_type: typeof type): JSX.Element => {
        switch (_type) {
            case 'facebook':
                return <FacebookCard {...props} />;

            case 'custom':
                return (
                    <div className='custom-card-wrapper' {...props}>
                        {children}
                    </div>
                );

            case 'instagram':
                return <InstagramCard {...props} />;

            default:
                return <InstagramCard {...props} />;
        }
    };

    const checkIfMultipleCards = (_isHorizontal: boolean): JSX.Element => {
        // eslint-disable-next-line no-console
        console.log(_isHorizontal);
        return renderBasedOnType(type);
    };

    return checkIfMultipleCards(isHorizontal);
};

export default SocialCards;
