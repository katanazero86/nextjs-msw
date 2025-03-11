// src/mocks/handlers.ts
import {http, HttpResponse, passthrough} from 'msw'

interface User {
    id: number
    name: string
}

export const handlers = [
    http.get('/api/example', () => {
        return HttpResponse.json({message: 'Hello, MSW!'});
    }),

    http.get('/api/users', () => {
        const users: User[] = [
            {id: 1, name: 'John'},
            {id: 2, name: 'Jane'},
        ]
        return HttpResponse.json(users)
    }),

    http.post('/api/users', async ({request}) => {
        const newUser = await request.json() as Omit<User, 'id'>
        return HttpResponse.json({id: 3, ...newUser} as User, {status: 201})
    }),

    http.get('*', ({request}) => {
        console.log('url', request.url);

        // 이미지 파일 요청은 패스스루 처리
        if (/\.(png|jpg|jpeg|gif|svg)$/.test(request.url)) {
            return passthrough();
        }

        // 그 외의 요청은 기본적으로 패스스루
        return passthrough();
    }),
]