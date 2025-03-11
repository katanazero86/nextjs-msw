// src/components/ExampleClient.tsx
'use client'
import { useEffect, useState } from 'react';

interface ApiResponse {
    message: string;
}

export default function ExampleClient() {
    const [data, setData] = useState<ApiResponse | null>(null);

    useEffect(() => {
        console.log('fetch..');
        fetch('/api/example')
            .then((res) => res.json())
            .then((data: ApiResponse) => setData(data))
            .catch((error) => console.error('API 호출 오류:', error));
    }, []);

    return (
        <div>
            <h1>클라이언트 사이드 API 호출</h1>
            {data ? <p>{data.message}</p> : <p>데이터 로딩 중...</p>}
        </div>
    );
}