"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="赛芒 Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-foreground">赛芒</span>
            <span className="text-xs text-muted-foreground">Tech Brings Better Life</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#product" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            产品介绍
          </Link>
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            核心功能
          </Link>
          <Link href="#applications" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            应用场景
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            关于我们
          </Link>
        </nav>

        {/* 语言切换按钮 */}
        <div className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
          >
            中文
          </button>
          <button
            type="button"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            <Link href="#product" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground">
              产品介绍
            </Link>
            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground">
              核心功能
            </Link>
            <Link href="#applications" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground">
              应用场景
            </Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground">
              关于我们
            </Link>
            <div className="flex items-center gap-1 border-t border-border pt-4">
              <button
                type="button"
                className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground"
              >
                中文
              </button>
              <button
                type="button"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
