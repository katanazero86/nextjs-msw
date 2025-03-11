// src/app/MSWInit.tsx
'use client';
import {useEffect, useState} from 'react';
import initMocks from './mocks';

export default function MSWInit({children}: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const isDev = process.env.NODE_ENV === 'development';
    console.log('isDev', isDev);

    useEffect(() => {
        if (isDev) {
            initMocks()
                .catch(err => {
                    console.error('MSW 초기화 오류:', err);
                })
                .finally(() => {
                    setIsLoaded(true);
                });
        }
    }, [isDev]);

    if (!isLoaded && isDev) return null;

    return (
        <>
            {children}
        </>
    );
}
