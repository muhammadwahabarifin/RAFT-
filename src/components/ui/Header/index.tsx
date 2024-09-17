'use client'

import React, { useState } from 'react'
import { 
    BurgerMenu, 
    CallToActions, 
    Inner, 
    LogoContainer, 
    Nav, 
    Wrapper 
} from './styles';
import Image from 'next/image';
import raft_logo from '../../../../public/svgs/raft_logo.svg';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { motion } from 'framer-motion'
import { links, menu } from './constants';
import AnimatedLink from '@/components/common/AnimatedLink';
import GetStartedButton from '@/components/common/GetStartedButton';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper>
            <Inner>
                <LogoContainer>
                    <Image src={raft_logo} alt='raft-logo' priority />
                    <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
                        <motion.div
                            variants={menu}
                            animate={isOpen ? 'open' : 'closed'}
                            initial='closed'></motion.div>
                        <Image src={ic_bars} alt='bars' />
                    </BurgerMenu>
                </LogoContainer>
                <Nav className={isOpen ? 'active' : ''}>
                    {links.map((link, i) => (
                        <AnimatedLink key={i} title={link.linkTo}></AnimatedLink>
                    ))}
                </Nav>
                <CallToActions className={isOpen ? 'active' : ''}>
                    <AnimatedLink title='Login' />
                    <GetStartedButton padding='0.5rem 0.75rem' />
                </CallToActions>
            </Inner>
        </Wrapper>
    );
};
