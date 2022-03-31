import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Link href="/post/first-post">
        <a>this page!</a>
      </Link>
    </div>
  )
}
