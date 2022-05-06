import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AiOutlineQuestion } from 'react-icons/ai';
import { Avatar } from '../src/index';
import PageDoc from './development.mdx';

const itemsArray = [
    <img
        src='https://avataaars.io/?avatarStyle=Transparent&topType=Turban&accessoriesType=Prescription01&hatColor=PastelRed&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Bear&eyeType=Dizzy&eyebrowType=Angry&mouthType=Serious&skinColor=Yellow'
        alt='img1'
    />,
    <img
        src='https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Sunglasses&hatColor=PastelGreen&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=Hoodie&clotheColor=Gray01&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Pale'
        alt='img2'
    />,
    <p>John Doe</p>,
    <AiOutlineQuestion />,
];

export default {
    title: 'Designs/Atoms/Avatar',
    component: Avatar,
    argTypes: {
        groupedLimit: {
            defaultValue: '3',
            description: 'Limit number of avatars',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '3' },
            },
        },
        grouped: {
            defaultValue: false,
            description: 'Group avatars together',
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        stringifyLetter: {
            defaultValue: false,
            description: 'Show avatars with initals',
            control: {
                type: 'boolean',
            },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        },
        backgroundColor: {
            defaultValue: '#d71920',
            description: 'Select avatar background color',
            control: {
                type: 'color',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'transparent' },
            },
        },
        size: {
            defaultValue: 'normal',
            description: 'Select size',
            table: {
                type: {
                    summary: 'small | normal | big',
                },
                defaultValue: { summary: 'normal' },
            },
            control: {
                type: 'select',
                options: {
                    small: 'small',
                    normal: 'normal',
                    big: 'big',
                },
            },
        },
        variant: {
            defaultValue: 'circled',
            description: 'Select variant',
            table: {
                type: {
                    summary: 'circled | squared | rounded',
                },
                defaultValue: { summary: 'circled' },
            },
            control: {
                type: 'select',
                options: {
                    circled: 'circled',
                    squared: 'squared',
                    rounded: 'rounded',
                },
            },
        },
        values: {
            defaultValue: itemsArray,
            description: 'Pass an array of values to render as avatars',
            control: {
                type: 'array',
            },
            table: {
                type: { summary: 'array<any>' },
                defaultValue: { summary: '[]' },
            },
        },
        className: {
            defaultValue: 'avatar',
            control: {
                type: 'text',
            },
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'avatar' },
            },
            description: 'Specify custom className for override',
        },
    },
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args}>
        <div style={{ backgroundColor: '#1693c5' }}>
            <img
                src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                alt='img1'
            />
        </div>

        <div style={{ backgroundColor: '#c71585' }}>
            <img
                src='https://avataaars.io/?avatarStyle=Transparent&topType=Turban&accessoriesType=Prescription01&hatColor=PastelRed&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Bear&eyeType=Dizzy&eyebrowType=Angry&mouthType=Serious&skinColor=Yellow'
                alt='img2'
            />
        </div>

        <p style={{ color: '#FFF', textAlign: 'center' }}>John Doe</p>

        <div>
            <img
                src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Blue&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=BlazerShirt&clotheColor=Heather&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Vomit&skinColor=Black'
                alt='img3'
            />
        </div>

        <div>
            <img
                src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Surprised&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Brown'
                alt='img4'
            />
        </div>

        <div>
            <img
                src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Kurt&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Gray02&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Vomit&skinColor=DarkBrown'
                alt='img5'
            />
        </div>
    </Avatar>
);

Default.args = {
    values: undefined,
};

export const AvatarWithArrayOfValues: ComponentStory<typeof Avatar> = (
    args
) => <Avatar {...args} />;
