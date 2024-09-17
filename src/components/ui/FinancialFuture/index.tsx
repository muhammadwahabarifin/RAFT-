'use client'

import React from 'react'
import future_banner from '../../../../public/images/future_banner.png';
import future_mobile_banner from '../../../../public/images/future_mobile_banner.png';
import { useIsMobile } from '../../../../libs/uselsMobile';
import { 
    Banner, 
    Card, 
    CardContainer, 
    Header, 
    Inner, 
    Stat, 
    Stats, 
    SVGCtn, 
    TextCtn, 
    Wrapper 
} from './styles';
import MaskText from '@/components/common/MasText';
import { 
    cardsInfo, 
    desktopHeaderPhrase, 
    desktopParagraphPhrase, 
    mobileHeaderPhrase, 
    mobileParagraphPhrase, 
    stats 
} from './constants';
import Image from 'next/image';

export default function FinancialFuture() {
    const isMobile = useIsMobile();

    return (
        <Wrapper>
            <Inner>
                <Header>
                    {isMobile ? (
                        <>
                            <MaskText phrases={mobileHeaderPhrase} tag='h1' />
                            <MaskText phrases={mobileParagraphPhrase} tag='P' />
                        </>
                    ) : (
                        <>
                            <MaskText phrases={desktopHeaderPhrase} tag='h1' />
                            <MaskText phrases={desktopParagraphPhrase} tag='p' />
                        </>
                    )}
                </Header>
                <CardContainer>
                    {cardsInfo.map((info, i) => (
                        <Card key={i}>
                            <TextCtn>
                                <MaskText phrases={new Array(info.title)} tag='h3' />
                                <MaskText phrases={new Array(info.details)} tag='p' />
                            </TextCtn>
                            <SVGCtn>
                                <Image src={info.icon} alt='icon' />
                            </SVGCtn>
                        </Card>
                    ))}
                </CardContainer>
                <Stats>
                    {stats.map((stat, i) => (
                        <Stat key={i}>
                            <MaskText phrases={new Array(stat.number)} tag='h1' />
                            <MaskText phrases={new Array(stat.subtitle)} tag='p' />
                        </Stat>
                    ))}
                </Stats>
            </Inner>
            <Banner>
                {isMobile ? (
                    <Image src={future_mobile_banner} alt='future' fill />
                ) : (
                    <Image src={future_banner} alt='future-banner' fill />
                )}
            </Banner>
        </Wrapper>
    )
}
