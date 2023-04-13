import Head from "next/head"
import Link from "next/link"

export default function ErrorPage({ statusCode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>404 | aadalal</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          404
        </h1>
        <p className="mt-3 text-2xl">
          This page could not be found. <Link href="/">Go back home?</Link>
        </p>
      </main>
    </div>
  )
}