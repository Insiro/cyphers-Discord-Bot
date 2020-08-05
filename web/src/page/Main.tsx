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
            <DefaultBlock>
                <h1>Cyphers Bot for Discord</h1>
                <p>사이퍼즈 클랜 디스코드 서버 운영을 수월하게 하기 위한 봇입니다.</p>
            </DefaultBlock>
            <RightBlock>RightBlock</RightBlock>
        </PageBase>
    );
};
