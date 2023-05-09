import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "lightBlue"
};

// 通常は親コンポーネントに更新があると子のコンポーネントも再レンダリングされるが、
// memoで全体を囲うとpropsに変更がなければ再レンダリングしなくなる
// 処理の重い子コンポーネントはメモ化しておくと何度も無駄にレンダリングされずに済む

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <p>Child</p>
          <button onClick={onClickClose}>Close</button>
        </div>
      ) : null}
    </>
  );
});
