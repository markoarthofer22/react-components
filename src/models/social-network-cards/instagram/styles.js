import { css } from '@emotion/react';

export const InstagramCardStyles = (theme) => {
    return css({
        display: 'block',
        alignSelf: 'stretch',
        margin: '0 10px',

        '.instagram-card': {
            background: theme.colors.white,
            border: `1px solid ${theme.colors.lighterGrey}`,
            borderRadius: 3,
            width: '100%',
            maxWidth: 600,
            height: '100%',

            a: {
                textDecoration: 'none',
            },

            '&--header': {
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            },

            '&--image': {
                position: 'relative',
                width: '100%',
                height: 250,
                overflow: 'hidden',

                '& > div': {
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 50%',
                },
            },

            '&--user-image': {
                borderRadius: '50%',
                width: 40,
                height: 40,
                verticalAlign: 'middle',
            },

            '&---time': {
                float: 'right',
                width: 80,
                paddingTop: 10,
                textAlign: 'right',
                color: theme.colors.grey90,
            },

            '&--user-name': {
                marginLeft: 20,
                fontWeight: 700,
                color: theme.colors.black,
            },

            '&--content': {
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: 'calc(100% - 250px - 60px - 40px)',
            },

            '&--likes': {
                fontWeight: 700,
            },

            '&--content-user': {
                fontWeight: 700,
                color: theme.colors.black,
                marginRight: 6,
            },

            '&--hashtag': {
                color: theme.colors.blue,
            },

            '&--comments': {
                color: theme.colors.grey90,
            },

            '&--user-comment': {
                a: {
                    color: theme.colors.blue,
                },
            },

            '&--main': {},

            '&--footer': {},

            hr: {
                border: 'none',
                borderBottom: `1px solid ${theme.colors.grey}`,
                marginTop: 30,
                marginBottom: 0,
            },
        },
    });
};
