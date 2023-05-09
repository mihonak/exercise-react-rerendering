import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // コンポーネントのメモ化　:memo
  // 関数のメモ化 :useCallback
  // 変数のメモ化 :useMemo

  // useCallbackを使っていないと毎回新たな関数を生成していることになり、
  // この関数を使用している子コンポーネントのpropsが更新されたと判断され、再レンダリングされてしまう。
  // const onClickClose = () => setOpen(false);
  //
  // 以下のようにuseCallbackで囲うことで、最初だけ
  // 第二引数に監視する値を設定する。空にすると、最初に設定された値が参照され続ける
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => {
    console.log(text);
    return 1 + 3;
  }, [text]);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>Show</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
