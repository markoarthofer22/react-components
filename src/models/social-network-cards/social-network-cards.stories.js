import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import SocialCards from './social-network-cards.component';

storiesOf(`Designs/Models/Social Network Cards`, module)
    .addDecorator(withKnobs)
    .add('Instagram', () => (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <SocialCards
                author={{
                    name: 'Marko A',
                    avatarLink:
                        'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                }}
                title={text('Title', 'Welcome to card')}
                description={text(
                    'Description',
                    'Dolore anim aute sint eu.Enim id dolor adipisicing fugiat laboris deserunt fugiat ut ad irure fugiat non anim.Amet velit consequat reprehenderit reprehenderit deserunt.Incididunt ad minim labore non eu quis aliquip in enim deserunt labore do quis.'
                )}
                image={text(
                    'Content Image',
                    'https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print'
                )}
                type={select(
                    'Type',
                    {
                        instagram: 'instagram',
                        custom: 'custom',
                        facebook: 'facebook',
                    },
                    'instagram'
                )}
                post={{
                    likes: 5023,
                    commentsTotal: '10',
                    published: '42 minutes ago',
                    comments: [
                        {
                            author: 'MarkoA',
                            content:
                                'Aute consequat consectetur excepteur irure laborum laboris minim veniam veniam irure cupidatat veniam enim nostrud.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                    ],
                }}
            />

            <SocialCards
                author={{
                    name: 'Marko A',
                    avatarLink:
                        'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                }}
                title={text('Title', 'Welcome to card')}
                description={text(
                    'Description',
                    'Dolore anim aute sint eu.Enim id dolor adipisicing fugiat laboris deserunt fugiat ut ad irure fugiat non anim.Amet velit consequat reprehenderit reprehenderit deserunt.Incididunt ad minim labore non eu quis aliquip in enim deserunt labore do quis.'
                )}
                image={text(
                    'Content Image',
                    'https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print'
                )}
                type={select(
                    'Type',
                    {
                        instagram: 'instagram',
                        custom: 'custom',
                        facebook: 'facebook',
                    },
                    'instagram'
                )}
                post={{
                    likes: 5023,
                    commentsTotal: '10',
                    comments: [
                        {
                            author: 'MarkoA',
                            content:
                                'Aute consequat consectetur excepteur irure laborum laboris minim veniam veniam irure cupidatat veniam enim nostrud.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                    ],
                }}
            />

            <SocialCards
                author={{
                    name: 'Marko A',
                    avatarLink:
                        'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                }}
                title={text('Title', 'Welcome to card')}
                description={text(
                    'Description',
                    'Dolore anim aute sint eu.Enim id dolor adipisicing fugiat laboris deserunt fugiat ut ad irure fugiat non anim.Amet velit consequat reprehenderit reprehenderit deserunt.Incididunt ad minim labore non eu quis aliquip in enim deserunt labore do quis.'
                )}
                image={text(
                    'Content Image',
                    'https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print'
                )}
                type={select(
                    'Type',
                    {
                        instagram: 'instagram',
                        custom: 'custom',
                        facebook: 'facebook',
                    },
                    'instagram'
                )}
                post={{
                    likes: 5023,
                    commentsTotal: '10',
                    comments: [
                        {
                            author: 'MarkoA',
                            content:
                                'Aute consequat consectetur excepteur irure laborum laboris minim veniam veniam irure cupidatat veniam enim nostrud.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                    ],
                }}
            />
        </div>
    ))
    .add('Facebook', () => (
        <div
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
            }}
        >
            <SocialCards
                author={{
                    name: 'Marko A',
                    image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                }}
                description={text(
                    'Description',
                    'Dolore anim aute sint eu.Enim id dolor adipisicing fugiat laboris deserunt fugiat ut ad irure fugiat non anim.Amet velit consequat reprehenderit reprehenderit deserunt.Incididunt ad minim labore non eu quis aliquip in enim deserunt labore do quis.'
                )}
                image={text(
                    'Content Image',
                    'https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print'
                )}
                type={select(
                    'Type',
                    {
                        instagram: 'instagram',
                        custom: 'custom',
                        facebook: 'facebook',
                    },
                    'facebook'
                )}
                post={{
                    likes: 5023,
                    commentsTotal: '10',
                    published: '42 minutes ago',
                    comments: [
                        {
                            author: 'MarkoA',
                            content:
                                'Aute consequat consectetur excepteur irure laborum laboris minim veniam veniam irure cupidatat veniam enim nostrud.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                    ],
                }}
            />

            <SocialCards
                author={{
                    name: 'Marko A',
                    image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                }}
                description={text(
                    'Description',
                    'Dolore anim aute sint eu.Enim id dolor adipisicing fugiat laboris deserunt fugiat ut ad irure fugiat non anim.Amet velit consequat reprehenderit reprehenderit deserunt.Incididunt ad minim labore non eu quis aliquip in enim deserunt labore do quis.'
                )}
                image={text(
                    'Content Image',
                    'https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print'
                )}
                type={select(
                    'Type',
                    {
                        instagram: 'instagram',
                        custom: 'custom',
                        facebook: 'facebook',
                    },
                    'facebook'
                )}
                post={{
                    likes: 5023,
                    commentsTotal: '10',
                    published: '42 minutes ago',
                    comments: [
                        {
                            author: 'MarkoA',
                            content:
                                'Aute consequat consectetur excepteur irure laborum laboris minim veniam veniam irure cupidatat veniam enim nostrud.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                    ],
                }}
            />
        </div>
    ))
    .add('Custom with children', () => (
        <React.Fragment>
            <SocialCards
                author={{
                    name: 'Marko A',
                    image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
                }}
                description={text(
                    'Description',
                    'Dolore anim aute sint eu.Enim id dolor adipisicing fugiat laboris deserunt fugiat ut ad irure fugiat non anim.Amet velit consequat reprehenderit reprehenderit deserunt.Incididunt ad minim labore non eu quis aliquip in enim deserunt labore do quis.'
                )}
                image={text(
                    'Content Image',
                    'https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print'
                )}
                type={select(
                    'Type',
                    {
                        instagram: 'instagram',
                        custom: 'custom',
                        facebook: 'facebook',
                    },
                    'custom'
                )}
                post={{
                    likes: 5023,
                    commentsTotal: '10',
                    published: '42 minutes ago',
                    comments: [
                        {
                            author: 'MarkoA',
                            content:
                                'Aute consequat consectetur excepteur irure laborum laboris minim veniam veniam irure cupidatat veniam enim nostrud.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                        {
                            author: 'MarkoB',
                            content:
                                'Eiusmod consequat ea eu amet non in Lorem velit amet.',
                        },
                    ],
                }}
            >
                <div>
                    <h1>Custom with children</h1>
                </div>
            </SocialCards>
        </React.Fragment>
    ));
