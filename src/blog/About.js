import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

function About() {
  return (
    <Grid>
      <Paper
        variant="rounded"
        elevation={7}
        square
        style={{ borderRadius: "5% / 20%" }}
      >
        <div style={{ margin: "3%" }}>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            style={{ paddingTop: "3%", paddingTop: "5%" }}
          >
            そもそもライフゲームとは ライフゲーム (Conway's Game of Life[1])
            は1970年にイギリスの数学者ジョン・ホートン・コンウェイ (John Horton
            Conway)
            が考案した生命の誕生、進化、淘汰などのプロセスを簡易的なモデルで再現したシミュレーションゲームである。単純なルールでその模様の変化を楽しめるため、パズルの要素を持っている。
            - Wikipediaより引用
            https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0
            ライフゲームは碁盤のようなマス目を使用して、シミュレーションを行うものです。
            一つの格子を**セル**と呼び、セル自体は生か死かの状態しか持ちません。
          </Typography>
        </div>
      </Paper>
      {/* <ReactMarkdown remarkPlugins={[gfm]} children={markdown} /> */}
    </Grid>
  );
}

export default About;
