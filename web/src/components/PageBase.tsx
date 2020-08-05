/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import * as styles from "../constrants";

import { TitleBar } from "./TitleBar";
import { Footer } from "./Footer";

const Contents: React.FC = ({ children }) => {
    return <div>{children}</div>;
};
const Container: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                ${styles.container};
            `}
        >
            {children}
            <Footer />
        </div>
    );
};
export const PageBase: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <TitleBar />
            <Container>{children}</Container>
        </React.Fragment>
    );
};
