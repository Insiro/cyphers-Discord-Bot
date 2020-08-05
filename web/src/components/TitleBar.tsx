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

                padding: 1.5rem;
                align-items: center;
                justify-content: space-between;
            `}
        >
            <a
                css={css`
                    display: flex;
                    color: rgba(127, 156, 245, 1);
                    font-weight: 700;
                    font-size: 1.5rem;
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
