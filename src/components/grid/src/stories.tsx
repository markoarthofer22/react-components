import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    number,
    object,
    select,
} from '@storybook/addon-knobs';
import { Grid, Col, Row } from '.';

storiesOf(`Designs/Atoms`, module)
    .addDecorator(withKnobs)
    .add('Grid', () => (
        <Grid
            paddingX={number('Grid PaddingX', 16)}
            paddingY={number('Grid PaddingY', 16)}
            style={object('Grid override', {})}
            maxWidth={select(
                'Container maxWidth',
                {
                    xs: 'xs',
                    sm: 'sm',
                    md: 'md',
                    lg: 'lg',
                    xl: 'xl',
                },
                'xl'
            )}
        >
            <Row
                gutter={number('Row Gutter - in rem', 0.9375)}
                expanded={boolean('Expanded', true)}
                justify={select(
                    'Justify row',
                    {
                        'flex-start': 'flex-start',
                        center: 'center',
                        'flex-end': 'flex-end',
                        'space-between': 'space-between',
                        'space-around': 'space-around',
                        'space-evenly': 'space-evenly',
                    },
                    'flex-start'
                )}
                alignItems={select(
                    'Align row',
                    {
                        'flex-start': 'flex-start',
                        center: 'center',
                        'flex-end': 'flex-end',
                        stretch: 'stretch',
                        baseline: 'baseline',
                    },
                    'flex-start'
                )}
                style={object('Row override', {})}
            >
                <Col sm={4} md={4} lg={4} xl={4}>
                    <Row>
                        <p>Col1</p>
                    </Row>
                </Col>

                <Col sm={4} md={4} lg={4} xl={4}>
                    <p>Col2</p>
                </Col>

                <Col sm={4} md={4} lg={4} xl={4}>
                    <p>Co3</p>
                </Col>
            </Row>
        </Grid>
    ));
