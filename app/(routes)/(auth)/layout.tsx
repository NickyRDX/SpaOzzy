import MaxWidthWrapper from '@/components/Shared/MaxWidthWrapper/MaxWidthWrapper'
import React from 'react'

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MaxWidthWrapper>
      <section className="flex mx-auto max-w-3xl justify-center items-center min-h-screen">{children}</section>
    </MaxWidthWrapper>
  )
}
