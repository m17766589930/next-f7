import { Page, Navbar, Block, Link } from "@/lib/framework7";

export default function Blog({ params }: { params: { postID: string } }) {
  return (
    <Page>
      <Navbar title="My App">
        <Link slot="right" back transition="f7-fade"></Link>
      </Navbar>
      <Block strong>
        <p>
          This is a dynamic route loaded from <code>/blog/[postID].js</code>{" "}
          page component.
        </p>

        <p>
          Post ID: <b>{params.postID}</b>
        </p>
      </Block>
    </Page>
  );
}
