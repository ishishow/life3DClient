import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import gfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Typography } from "@material-ui/core";

const markdown = `### そもそもライフゲームとは
> ライフゲーム (Conway's Game of Life[1]) は1970年にイギリスの数学者ジョン・ホートン・コンウェイ (John Horton Conway) が考案した生命の誕生、進化、淘汰などのプロセスを簡易的なモデルで再現したシミュレーションゲームである。単純なルールでその模様の変化を楽しめるため、パズルの要素を持っている。 - Wikipediaより引用

https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B2%E3%83%BC%E3%83%A0

ライフゲームは碁盤のようなマス目を使用して、シミュレーションを行うものです。
一つの格子を**セル**と呼び、セル自体は生か死かの状態しか持ちません。

### ライフゲームのルール
今回、下記のルールを用いました。
**誕生**
&nbsp; 死んでいるセルに隣接する生きたセルがちょうど3つあれば、次の世代が誕生する。
**生存**
&nbsp; 生きているセルに隣接する生きたセルが2つか3つならば、次の世代でも生存する。
**過疎**
&nbsp; 生きているセルに隣接する生きたセルが1つ以下ならば、過疎により死滅する。
**過密**
&nbsp; 生きているセルに隣接する生きたセルが4つ以上ならば、過密により死滅する。

### セルの変化の例
<img width="801" alt="スクリーンショット 2017-04-07 14.29.16.png" src="https://qiita-image-store.s3.amazonaws.com/0/84888/c6eb3e86-edc0-e2ff-fc5d-8a4c332a687a.png">
※生きているセルを黒、死んでいるセルを白とする。

赤枠のセルに着目したとき、世代nにおける赤枠セルの周囲8つのセルの状態から、世代n+1における赤枠のセルの状態が決定する。

## 実装
### メインクラス
\`\`\`java:LifeGame.java
public class LifeGame {
	public static void main(String[] args){
		GameFrame frame = new GameFrame(Const.FRAME_SIZE.width,Const.FRAME_SIZE.height);
		frame.setTitle("LifeGame");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		try {
			frame.setCells(Const.CELL_SIZE);
		} catch (Exception e) {	e.printStackTrace(); }
		
		frame.setVisible(true);
		
	     Thread t = new Thread(frame);
	     t.start();
	}
}
\`\`\`


## まとめ
今回初めてライフゲームを作ってみました。
単純なルールに従って、画面が変わっていくだけの単純なものですが、眺めていると結構楽しいです。
今回紹介した3パターン以外にも、固定物体(世代が進んでも変化しない)パターンや、繁殖型(世代が進むと、別のパターンを新たに生成する)パターンなどいろいろあるので、新しいパターンを探して見るのも楽しいかもしれません。
`;

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
