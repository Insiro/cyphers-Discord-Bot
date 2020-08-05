/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import * as styles from "../constrants";

import { PageBase } from "../components/PageBase";
import { DefaultBlock } from "../components/DefaultBlock";
import { RightBlock } from "../components/RightBlock";
const contents: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                ${styles.container}
            `}
        >
            {children}
        </div>
    );
};

export const Main: React.FC = () => {
    return (
        <PageBase>
            <DefaultBlock>DefaultBlock</DefaultBlock>
            <RightBlock>RightBlock</RightBlock>
        </PageBase>
    );
};
