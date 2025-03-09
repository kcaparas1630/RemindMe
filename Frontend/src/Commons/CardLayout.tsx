import React, { FC } from "react";
import { CardLayoutContainer, CardLayoutHeader, CardLayoutTitle, CardLayoutTitleText, CardLayoutRightItem, CardLayoutContent } from "./StyledCommons/StyledCard";
import isDarkMode from "../Interface/General/isDarkMode";

interface CardLayoutProps extends isDarkMode {
    title: string;
    children: React.ReactNode;
    rightItem: React.ReactNode;
}

const CardLayout: FC<CardLayoutProps> = ({ title, children, isDarkMode, rightItem }) => {
    return (
        <CardLayoutContainer isDarkMode={isDarkMode}>
            <CardLayoutHeader isDarkMode={isDarkMode}>
                <CardLayoutTitle>
                    <CardLayoutTitleText>
                        {title}
                    </CardLayoutTitleText>
                    <CardLayoutRightItem>{rightItem}</CardLayoutRightItem>
                </CardLayoutTitle>
            </CardLayoutHeader>
            <CardLayoutContent>
                {children}
            </CardLayoutContent>
        </CardLayoutContainer>
    );
};

export default CardLayout;
