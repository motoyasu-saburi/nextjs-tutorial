import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>[id] Posts</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
