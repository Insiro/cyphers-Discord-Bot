import { css } from "@emotion/core";
export const MEDIAQUERY_XL = `@media (min-width:1280px)`;
export const MEDIAQUERY_L = `@media (min-width:1024px)`;
export const MEDIAQUERY_M = `@media (min-width:768px)`;
export const MEDIAQUERY_S = `@media (min-width:640px)`;

export const no_underline = css`text-decoration:none;
: hover text-decoration:none;
`;

export const Box = css` 
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    ${MEDIAQUERY_XL} {
        max-width: 1280px;
    }
    ${MEDIAQUERY_L} {
        max-width: 1024px;
    }
    ${MEDIAQUERY_M} {
        max-width: 768px;
    }
    ${MEDIAQUERY_S} {
        max-width: 640px;
    }
`;

export const container = css`
    width: 100%;
    max-width: 1280px;
    padding-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    ${Box};
    ${MEDIAQUERY_M}{
        padding-top: 12rem;
        flex-direction: row;
    }
`;
export const leftcontents = css`
    display:flex;
    flex-direction:column;
    width: 100%;
    justify-content: center;
    overflow-y: hidden;
    ${MEDIAQUERY_L} {
        align-items: flex-start;
    }
    ${MEDIAQUERY_XL}{
        width: 40%;
    }

`;
export const righrcontents = css`
    width: 100%;
    overflow-y: hidden;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    ${MEDIAQUERY_XL}{
        width: 40%;
    }
`;
export const fadeIn = css`
    -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
    animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 1s both;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-play-state: running;
    animation-name: fade-in;
`;
