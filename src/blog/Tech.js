import Grid from "@material-ui/core/Grid";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const markdown = `### 仕様技術
- Unity
- React
- Golang
- Postgres`;

function Tech() {
  return (
    <Grid>
      <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
    </Grid>
  );
}

export default Tech;
