// src/instrumentation.ts
// import {server} from './mocks/node'; // module not found

export async function register() {
    if(process.env.NEXT_RUNTIME === 'nodejs' && process.env.NODE_ENV === 'development') {
        const { server } = await import('./mocks/node')
        server.listen({
            onUnhandledRequest: 'bypass',  // 모의되지 않은 요청은 무시
        });
    }
}