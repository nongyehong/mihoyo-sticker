import { ExclamationTriangleIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { StickerCard } from '~/components/sticker-card'

import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

import { StickerClassify } from '~/types'

const SERVER_URL = 'https://bbs-api-static.miyoushe.com/misc/api/emoticon_set'

async function getStickerRecords() {
  const resp = await fetch(SERVER_URL)
  const respJson = await resp.json()
  return respJson.data.list as StickerClassify[]
}

export default async function Home() {
  const stickers = await getStickerRecords()

  return (
    <div className="grid sm:justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="h-screen w-screen flex justify-center items-center sm:h-auto sm:w-auto sm:pt-20">
        <img
          src="/qv_furina.png"
          width={150}
          className="dark:brightness-[.3] dark:opacity-80 opacity-50 select-none"
          draggable="false" />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center w-screen sm:w-[750px] p-8 box-border">
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>
            The current website is under urgent development.
          </AlertDescription>
        </Alert>

        <StickerCard className="w-full" records={stickers} />
        <div className="flex gap-2 mx-auto">
          <Input placeholder="search your like sticker" />
          <Button variant="outline">Search</Button>
        </div>
      </main>
      <footer className="flex direction-alternate flex-col gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground/50 hover:text-muted-foreground/100"
          href="https://github.com/Clover-You/mihoyo-sticker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon />
          GitHub
        </a>

        <span className="text-muted-foreground/50 text-sm">
          © 2024-PRESENT
          <Link href="https://github.com/Clover-You" className="ml-2" target="_blank">Clover You</Link>
        </span>
      </footer>
    </div>
  )
}
