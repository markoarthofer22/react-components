import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    color,
    select,
    number,
} from '@storybook/addon-knobs';
import { AiOutlineQuestion } from 'react-icons/ai';
import Avatar from './index';
import GlobalThemeProvider from '../../../themes/src/index';

const itemsArray = [
    <img src='https://avataaars.io/?avatarStyle=Transparent&topType=Turban&accessoriesType=Prescription01&hatColor=PastelRed&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Bear&eyeType=Dizzy&eyebrowType=Angry&mouthType=Serious&skinColor=Yellow' />,
    <img src='https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Sunglasses&hatColor=PastelGreen&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=Hoodie&clotheColor=Gray01&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Pale' />,
    <p>Damire Arthofer</p>,
    <AiOutlineQuestion />,
];

storiesOf(`Designs/Atoms/Avatar`, module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <GlobalThemeProvider>
            <div>
                <Avatar
                    groupedLimit={number('Limit', 3)}
                    grouped={boolean('Grouped', true)}
                    stringifyLetter={boolean('Show Initials', true)}
                    backgroundColor={color('Background Color', '#d71920')}
                    variant={select(
                        'Variant',
                        {
                            circled: 'circled',
                            squared: 'squared',
                            rounded: 'rounded',
                        },
                        'circled'
                    )}
                    size={select(
                        'Size',
                        { small: 'small', normal: 'normal', big: 'big' },
                        'normal'
                    )}
                >
                    <div style={{ backgroundColor: '#1693c5' }}>
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' />
                    </div>

                    <div style={{ backgroundColor: '#c71585' }}>
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=Turban&accessoriesType=Prescription01&hatColor=PastelRed&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Blonde&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&graphicType=Bear&eyeType=Dizzy&eyebrowType=Angry&mouthType=Serious&skinColor=Yellow' />
                    </div>

                    <p style={{ color: '#FFF', textAlign: 'center' }}>
                        Marko Arthofer
                    </p>

                    <div>
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Blue&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=BlazerShirt&clotheColor=Heather&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Vomit&skinColor=Black' />
                    </div>

                    <div>
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairFroBand&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Surprised&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Brown' />
                    </div>

                    <div>
                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Kurt&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Gray02&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Vomit&skinColor=DarkBrown' />
                    </div>
                </Avatar>
            </div>
        </GlobalThemeProvider>
    ))
    .add('Avatar with array of values', () => (
        <GlobalThemeProvider>
            <div>
                <Avatar
                    groupedLimit={number('Limit', 3)}
                    grouped={boolean('Grouped', false)}
                    values={itemsArray}
                    stringifyLetter={boolean('Show Initials', true)}
                    backgroundColor={color('Background Color', '#d71920')}
                    variant={select(
                        'Variant',
                        {
                            circled: 'circled',
                            squared: 'squared',
                            rounded: 'rounded',
                        },
                        'circled'
                    )}
                    size={select(
                        'Size',
                        { small: 'small', normal: 'normal', big: 'big' },
                        'normal'
                    )}
                />
            </div>
        </GlobalThemeProvider>
    ));
