// src/components/ExampleServer.tsx

export default async function ExampleServer() {
    const res = await fetch('/api/example');
    const {message} = await res.json();

    return (
        <div>
            <h1>서버 사이드 API 호출</h1>
            <p>{message}</p>
        </div>
    );
}