import "./message.css";

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
        className="messageImg"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAB8CAMAAADJjQWXAAAAYFBMVEX///8AAAB7e3uJiYlgYGBCQkLw8PAaGhqxsbEtLS1nZ2ft7e1YWFiQkJD8/Px1dXW9vb2ioqILCws5OTnk5OTe3t7FxcVOTk4lJSX29vYfHx+pqamampoWFhbPz88RERGWF/8FAAACrklEQVR4nO2cbXeCIBiGVYxpKaFmL7Pc//+X00jch7bEw6PE7uvLOGc73FyxOPGEBAEAAAAAAAAAAAD+NWLtAVjmkBRNu4BW21yTA3XIgzoLe85HYq3j+Z6T1aQpDw5VqCiPpDnHR0xYLTFd1yEtPJHmnHTOlTRHsddpN9KcL52zJ81R68No9UGa9fHDSqhsgvex4JyvZTWm20XIfXXeRIlYZ66SaHOu9lJYnq7Bha1ixSjeYSIodEQSLW4VJbpZWI2Ix4gVrMbI2GoErCxBaXVR66lTVoJf7j9mdsybtCzLU7egumMl5KkbU1rwuVa7wYU5ZDUs8vFuZr+57kxuHbHaSt3M583VLtM9MGfmiulmNm+yYEUArAyAFQGwMgBWBMBqMuLivJV4lJ6mI/ebZvzw56JV3Jz68owJfZ2CTbOyXM/Sr/8rq23fLKbHi+D+yfil1aeoD902h0CLH2rxOcUqlAYdV5Os0iS8Zf1XCBduj36be8xuYZJOsqomvk4dahMzxar7N8ybJt7YI26a/Nb1O9GqmyzxY+R/ERtYUTHVaqzP/CJWt/k1iRIm38qqLpiMiiZqn2vxtFR/z97KaqhDpPzpVPGhnxxWVMBKjQZWqgkrO8BKjQZWqgkrO8BKjQZWqum+VfmLVdBGTRFJVtRvZSVZt3u65u3fxwiFZ7tGvVVec4efGe/wX2npX1usxuzWr8YMGFXOCI7t8ZqgcmZU5bSMaZXTqG8vK9Lv8+2BKc5bzeoWVgTAygBYEQArA2BFAKxMcPyE6sx+/TxN7OfJ7x53T+lbOOfhlJU1/LRyZQ20aeXrU2U+PgEY+Pq0pp9P1irWs6LGvyfWe5a/XcDywveUxW6CeJyAW+YmCD9v7QjGG1aor1hZ8oaVAWon327bAQAAAAAAAAAAgCHf1K9LV4YiarAAAAAASUVORK5CYII="
          alt=""
        />
        <p className="messageText"> Lorem Ipsum passages, and more recently with desktop publ</p>
      </div>
      <div className="messageBottom">1 hr ago</div>
    </div>
  );
}
