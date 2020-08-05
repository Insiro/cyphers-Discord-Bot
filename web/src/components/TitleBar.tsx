/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import * as styles from "../constrants";
export const TitleBar: React.FC = () => {
    return (
        <div
            css={css`
                display: flex;
                ${styles.Box};

                padding: ${styles.SPACE_R};
                align-items: center;
                justify-content: space-between;
            `}
        >
            <a
                css={css`
                    display: flex;
                    color: rgba(127, 156, 245, 1);
                    font-weight: 700;
                    font-size: ${styles.SPACE_R};
                    ${styles.no_underline};
                `}
                href="#"
            >
                Cyphers Bot
            </a>
            <ul>
                <li>asdad</li>
            </ul>
        </div>
    );
};
