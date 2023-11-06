import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundImage: 'url("https://www.cudakitchen.com/image/data/seaga/ENV5B%20Front.png")'
    }}
    >
      <ul>
        <li><Link to="/soda">Soda</Link></li>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/sardines">Sardines</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;