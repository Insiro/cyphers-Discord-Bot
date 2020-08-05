/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import * as styles from "../constrants";

export const DefaultBlock: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                ${styles.leftcontents};
            `}
        >
            {children}
        </div>
    );
};
