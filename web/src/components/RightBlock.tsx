/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import * as styles from "../constrants";

export const RightBlock: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                ${styles.righrcontents};
            `}
        >
            {children}
        </div>
    );
};
