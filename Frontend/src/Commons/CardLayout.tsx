import React, { FC } from "react";
import { CardLayoutContainer, CardLayoutHeader, CardLayoutTitle, CardLayoutTitleText, CardLayoutDateText, CardLayoutContent } from "./StyledCommons/StyledCard";
import isDarkMode from "../Interface/General/isDarkMode";

interface CardLayoutProps extends isDarkMode {
    title: string;
    children: React.ReactNode;
}

const CardLayout: FC<CardLayoutProps> = ({ title, children, isDarkMode }) => {
    return (
        <CardLayoutContainer isDarkMode={isDarkMode}>
            <CardLayoutHeader isDarkMode={isDarkMode}>
                <CardLayoutTitle>
                    <CardLayoutTitleText>
                        {title}
                    </CardLayoutTitleText>
                    <CardLayoutDateText>{new Date().toLocaleDateString()}</CardLayoutDateText>
                </CardLayoutTitle>
            </CardLayoutHeader>
            <CardLayoutContent>
                {children}
            </CardLayoutContent>
        </CardLayoutContainer>
    );
};

export default CardLayout;
