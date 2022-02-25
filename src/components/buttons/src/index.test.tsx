import React from 'react';
import TestRenderer from 'react-test-renderer';
import GlobalThemeProvider from '../../../themes/global-theme-wrapper/src/index';

import { Button } from './index';

describe('Button', () => {
    test('snapshot renders', () => {
        const component = TestRenderer.create(
            <GlobalThemeProvider>
                <Button
                    clicked={() => console.log('clicked')}
                    title='New title'
                />
            </GlobalThemeProvider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
