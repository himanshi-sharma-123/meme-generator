import trollface from "../images/troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={trollface} alt="" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React.js</h4>
    </header>
  );
}
