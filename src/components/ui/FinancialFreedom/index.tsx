'use client'

import { useIsMobile } from '../../../../libs/uselsMobile';
import financial_freedom_banner from '../../../../public/images/financial_freedom_banner.png';
import freedom_mobile_banner from '../../../../public/images/freedom_mobile_banner.png';

import React from 'react'
import { 
    BannerCtn, 
    BriefNote, 
    Edge, 
    Edges, 
    Header, 
    Inner, 
    Title, 
    Wrapper 
} from './styles';
import MaskText from '@/components/common/MasText';
import { 
    desktopBriefNotePhrase, 
    desktopHeaderPhrase, 
    desktopParagraphPhrase, 
    edges, 
    mobileBriefNotePhrase, 
    mobileHeaderPhrase, 
    mobileParagraphPhrase 
} from './constants';
import RevealCover from '@/components/common/RevealCover';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';
import Image from 'next/image';

export default function FinancialFreedom() {
    const isMobile = useIsMobile();

    return (
        <Wrapper>
            <Inner>
                <Header>
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
                </Header>
                <BannerCtn>
                    <RevealCover />
                    <Div
                        variants={imageVariants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.25, once: true }}
                    >
                        {isMobile ? (
                            <Image src={freedom_mobile_banner} alt='freedom' fill />
                        ) : (
                            <Image src={financial_freedom_banner} alt='financial' fill />
                        )}
                    </Div>
                </BannerCtn>
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
            <BriefNote>
                {isMobile ? (
                    <MaskText phrases={mobileBriefNotePhrase} tag='p' />
                ) : (
                    <MaskText phrases={desktopBriefNotePhrase} tag='p' />
                )}
            </BriefNote>
        </Wrapper>
    );
};
