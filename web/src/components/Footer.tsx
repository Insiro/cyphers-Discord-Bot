/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import * as styles from "../constrants";

export const Footer: React.FC = () => {
    return (
        <div
            css={css`
                width: 100%;
                padding-top: 4rem;
                padding-bottom: 1.5rem;
                font-size: 0.875rem;
                text-align: center;
                ${styles.fadeIn};
                ${styles.MEDIAQUERY_M}{
                    text-align: left;
                }
            `}
        >
            Insiro.me
        </div>
    );
};
