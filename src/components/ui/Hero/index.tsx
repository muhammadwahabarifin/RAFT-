'use client'

import React from 'react'
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { HeroTextContainer, Inner, Pill, Wrapper } from './styles'
import Image from 'next/image'
import { useIsMobile } from '../../../../libs/uselsMobile';
import MaskText from '@/components/common/MasText';
import { mobileParagraphPhrases, mobilePhrases, paragraphPhrases, phrases } from './constants';
import GetStartedButton from '@/components/common/GetStartedButton';

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Introduction Raft Card</span>
          <Image src={ic_chevron_right} alt='chevron-right' />
        </Pill>
        <HeroTextContainer>
          {isMobile ? (
            <>
              <MaskText phrases={mobilePhrases} tag='h1' />
              <MaskText phrases={mobileParagraphPhrases} tag='p' />
            </>
          ) : (
            <>
              <MaskText phrases={phrases} tag='h1' />
              <MaskText phrases={paragraphPhrases} tag='p' />
            </>
          )}
        </HeroTextContainer>
        <GetStartedButton padding='1rem 2rem' />
      </Inner>
    </Wrapper>
  )
}
