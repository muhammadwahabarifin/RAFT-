'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const isClient = typeof window === 'object';

export const useIsMobile = () => {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(isClient && window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const newIsMobile = window.innerWidth <= 768;
            setIsMobile(newIsMobile);
        };

        if (isClient) {
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [pathname]);

    return isMobile;
}