import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head>
        <title>Next.js SPA 빌드 테스트</title>
      </Head>
      <main className="wrap">
        <h1>🎉 Next.js SPA 빌드 테스트</h1>
        <p>
          moveto.live의 &quot;SPA 빌드&quot; 탭을 테스트하기 위한 최소 Next.js
          (정적 배포, output: &apos;export&apos;) 프로젝트입니다.
        </p>
        <button onClick={() => setCount((c) => c + 1)}>
          클릭 횟수: {count}
        </button>
      </main>
    </>
  )
}
