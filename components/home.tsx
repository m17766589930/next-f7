"use client";
import { Page, Navbar, Block, Link } from "@/lib/framework7";

export default function Home() {
  return (
    <Page>
      <Navbar title="Framework7 Next.js" />
      <Block>
        <Link href="/blog/45">Blog post</Link>
        <Link href="/about">About</Link>
      </Block>
    </Page>
  );
}
