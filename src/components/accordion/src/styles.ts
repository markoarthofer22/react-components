import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AccordionStyles = (theme: any) =>
    css({
        '.accordion': {
            '&--title': {
                fontSize: 22,
                fontFamily: theme.fonts.titleFont,
                fontWeight: 400,
                color: theme.colors.black,
                padding: '10px 5px',
            },

            '&--wrapper': {
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
            },

            '&--item': {
                padding: '10px 5px',
                '&--title': {
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottom: `1px solid ${theme.colors.grey20}`,
                    paddingBottom: 5,

                    span: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '20px',
                        height: '20px',
                        padding: 5,
                        cursor: 'pointer',
                        svg: {
                            width: '20px',
                            height: '20px',
                            color: theme.colors.black,
                        },
                    },
                },

                '&--content': {
                    padding: '10px',
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderLeft: `1px solid ${rgba(theme.colors.grey20, 0.15)}`,
                    borderRight: `1px solid ${rgba(theme.colors.grey20, 0.15)}`,
                    borderBottom: `1px solid ${rgba(
                        theme.colors.grey20,
                        0.15
                    )}`,
                    backgroundColor: rgba(theme.colors.grey20, 0.1),
                    '&--wrapper': {},
                },
            },
        },
    });
