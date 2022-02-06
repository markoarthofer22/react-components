import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid, Col, Row } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/Grid',
    component: Grid,
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof Grid>;

export const Default: ComponentStory<typeof Grid> = () => (
    <Grid isCentered maxWidth='xl' paddingX={20} paddingY={16}>
        <Row
            expanded
            alignItems='flex-start'
            justify='flex-start'
            style={{ border: '1px solid #000' }}
        >
            <Col
                sm={4}
                md={4}
                lg={4}
                xl={4}
                style={{ border: '1px solid #000' }}
            >
                <Row>
                    <p>Col1</p>
                </Row>
            </Col>

            <Col
                sm={4}
                md={4}
                lg={4}
                xl={4}
                style={{ border: '1px solid #000' }}
            >
                <p>Col2</p>
            </Col>

            <Col
                sm={4}
                md={4}
                lg={4}
                xl={4}
                style={{ border: '1px solid #000' }}
            >
                <p>Co3</p>
            </Col>
        </Row>
    </Grid>
);
