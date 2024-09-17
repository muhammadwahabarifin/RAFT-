'use client'

import React, { useState } from 'react'
import lola_card from '../../../../public/images/lola_card.png';
import orange_card from '../../../../public/images/orange_card.png';
import terry_card from '../../../../public/images/terry_card.png';
import { useIsMobile } from '../../../../libs/uselsMobile'
import { 
    CardsContainer, 
    Header, 
    HeaderMainText, 
    Inner, 
    LeftImage, 
    MiddleImage, 
    RightImage, 
    Wrapper 
} from './styles';
import MaskText from '@/components/common/MasText';
import { 
    desktopHeaderPhrase, 
    desktopParagraphPhrase, 
    edges, 
    mobileHeaderPhrase, 
    mobileParagraphPhrase 
} from './constants';
import { Edge, Edges, Title } from '../FinancialFreedom/styles';
import Image from 'next/image';

export default function IntroSection() {
    const isMobile = useIsMobile();
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Wrapper>
            <Inner>
                <Header>
                    <h3>Introduction</h3>
                    <HeaderMainText>
                        {isMobile ? (
                            <>
                                <MaskText phrases={mobileHeaderPhrase} tag='h1' />
                                <MaskText phrases={mobileParagraphPhrase} tag='p' />
                            </>
                        ) : (
                            <>
                                <MaskText phrases={desktopHeaderPhrase} tag='h1' />
                                <MaskText phrases={desktopParagraphPhrase} tag='p' />
                            </>
                        )}
                    </HeaderMainText>
                </Header>
                <CardsContainer>
                    <LeftImage
                        className={isHovered ? 'active' : ''}
                        src={orange_card}
                        alt='orange-card'
                    />
                    <MiddleImage
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        src={lola_card}
                        alt='blue card'
                    />
                    <RightImage
                        className={isHovered ? 'active' : ''}
                        src={terry_card}
                        alt='terry-card'
                    />
                </CardsContainer>
                <Edges>
                    {edges.map((edge, i) => (
                        <Edge key={i}>
                            <Title>
                                <Image src={edge.icon} alt='icon' />
                                <MaskText phrases={new Array(edge.point)} tag='h3' />
                            </Title>
                            <MaskText phrases={new Array(edge.details)} tag='p' />
                        </Edge>
                    ))}
                </Edges>
            </Inner>
        </Wrapper>
    );
};
