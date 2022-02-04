/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';

import FacebookCard from './facebook';
import InstagramCard from './instagram';

import { CustomCardStyles } from './styles';

type CardType = 'instagram' | 'custom' | 'facebook';

interface IPost {
    likes: number | string;
    commentsTotal: number | string;
    published?: string;
    comments?: Array<{
        author: string;
        content: string;
    }>;
}

export interface ISocialCardsProps {
    title?: string;
    description?: string;
    image?: string;
    author?: {
        name: string;
        avatarLink?: string;
        image?: string;
    };
    isHorizontal?: boolean;
    type: CardType | CardType[];
    post?: IPost;
    children?: React.ReactNode;
    className?: string;
}

const SocialCards: React.FC<ISocialCardsProps> = (props): JSX.Element => {
    const { type, children, isHorizontal = false } = props;

    const theme = useTheme();

    const renderBasedOnType = (
        _type: typeof type,
        direction?: boolean
    ): JSX.Element => {
        switch (_type) {
            case 'facebook':
                return <FacebookCard {...props} isHorizontal={direction} />;

            case 'custom':
                return (
                    <span css={CustomCardStyles(theme)}>
                        <div className='custom-card-wrapper' {...props}>
                            {children}
                        </div>
                    </span>
                );

            case 'instagram':
                return <InstagramCard {...props} isHorizontal={direction} />;

            default:
                return <InstagramCard {...props} isHorizontal={direction} />;
        }
    };

    const checkIfMultipleCards = (_isHorizontal: boolean): JSX.Element =>
        renderBasedOnType(type, _isHorizontal);

    return checkIfMultipleCards(isHorizontal);
};

export default SocialCards;
