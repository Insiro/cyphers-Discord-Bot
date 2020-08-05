import { css } from "@emotion/core";

/* Space */

export const SPACE_XXL = "4rem"; // 64px
export const SPACE_XL = "3rem"; // 48px
export const SPACE_L = "2rem"; // 32px
export const SPACE_R = "1.5rem"; // 24px
export const SPACE_S = "1rem"; // 16px
export const SPACE_XS = ".5rem"; // 8px

/* BreakPoints */

export const BREAKPOINT_XL = 1280;
export const BREAKPOINT_L = 1024;
export const BREAKPOINT_R = 768;
export const BREAKPOINT_S = 640;

export const MEDIAQUERY_XL = `@media (min-width:${BREAKPOINT_XL}px)`;
export const MEDIAQUERY_L = `@media (min-width:${BREAKPOINT_L}px)`;
export const MEDIAQUERY_M = `@media (min-width:${BREAKPOINT_R}px)`;
export const MEDIAQUERY_S = `@media (min-width:${BREAKPOINT_S}px)`;

export const no_underline = css`text-decoration:none;
: hover text-decoration:none;
`;

export const autoMargin = css`
    margin-left: auto;
    margin-right: auto;
`;

export const Box = css`
    ${autoMargin};
    align-items: center;
    ${MEDIAQUERY_XL} {
        max-width: ${BREAKPOINT_XL}px;
    }
    ${MEDIAQUERY_L} {
        max-width: ${BREAKPOINT_L}px;
    }
    ${MEDIAQUERY_M} {
        max-width: ${BREAKPOINT_R}px;
    }
    ${MEDIAQUERY_S} {
        max-width: ${BREAKPOINT_S}px;
    }
`;

export const container = css`
    width: 100%;
    max-width: ${BREAKPOINT_XL}px;
    padding-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left: ${SPACE_R};
    padding-right: ${SPACE_R};
    ${Box};
    ${MEDIAQUERY_M} {
        padding-top: 12rem;
        flex-direction: row;
    }
`;

export const leftcontents = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    overflow-y: hidden;
    ${MEDIAQUERY_L} {
        align-items: flex-start;
    }
    ${MEDIAQUERY_XL} {
        width: 40%;
    }
`;
export const righrcontents = css`
    width: 100%;
    overflow-y: hidden;
    padding-top: ${SPACE_R};
    padding-bottom: ${SPACE_R};
    ${MEDIAQUERY_XL} {
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
