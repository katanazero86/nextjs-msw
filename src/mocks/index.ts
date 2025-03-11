// src/mocks/index.ts
async function initMocks() {
    if (typeof window === 'undefined') {
        console.log("Initializing msw by server");
        const {server} = await import('./node')
        server.listen({
            onUnhandledRequest: 'bypass',  // 모의되지 않은 요청은 무시
        })
    } else {
        console.log("Initializing msw by browser");
        const {worker} = await import('./browser')
        await worker.start({
            onUnhandledRequest: 'bypass', // 모의되지 않은 요청은 무시
        })
    }
}

export default initMocks