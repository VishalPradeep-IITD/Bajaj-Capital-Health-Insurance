import fs from "node:fs";
import path from "node:path";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "index.html");
  const html = fs.readFileSync(filePath, "utf8");
  return {
    props: {
      html
    }
  };
}

export default function Home({ html }) {
  return (
    <iframe
      title="Insurance Needs Analyser"
      srcDoc={html}
      style={{
        width: "100%",
        height: "100vh",
        border: "0",
        display: "block"
      }}
    />
  );
}
