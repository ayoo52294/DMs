import logo from "../assets/dms logo.svg";

function Logo() {
  return (
    <a href="#" className="inline-flex shrink-0" aria-label="Cruip">
      <img src={logo} alt="Dms Logo" width={100} height={90} />
    </a>
  );
}

export default Logo