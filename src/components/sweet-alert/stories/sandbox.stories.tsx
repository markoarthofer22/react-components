import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../buttons/src/index';
import { SweetAlert } from '../src/index';
import PageDoc from './development.mdx';

export default {
    title: 'Designs/Atoms/SweetAlert',
    component: SweetAlert,
    parameters: {
        docs: {
            page: PageDoc,
        },
    },
} as ComponentMeta<typeof SweetAlert>;

export const Default: ComponentStory<typeof SweetAlert> = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <>
            <Button
                title='Show Alert'
                className='default blue'
                clicked={() => {
                    setIsVisible(true);
                }}
            />

            <SweetAlert
                visible={isVisible}
                title='Sweet Alert title'
                content='Aliquip esse culpa adipisicing dolor cillum adipisicing velit officia.'
                icon='question'
                resolve={(result: any) => {
                    // eslint-disable-next-line no-alert
                    alert(`Results: ${JSON.stringify(result)}`);
                }}
                willClose={() => setIsVisible(false)}
            />
        </>
    );
};
