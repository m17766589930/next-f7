import { Page, Navbar, Block } from "@/lib/framework7";
import { fetchData } from "./actions";
export default async function About() {
  const data = await fetchData();
  console.log(data);

  return (
    <Page>
      <Navbar title="Framework7 Next.js" backLink />
      <Block>{data}Hello world from Next.js</Block>
    </Page>
  );
}
