import { css } from 'styled-components';

export const listStyles = css`
    width: 100%;
    max-width: 320px;

    padding: 0;

    border: 3px solid #485460;

    list-style: none;

    & > *:not(:last-child) {
        border-bottom: 1px solid #485460;
    }
`;
