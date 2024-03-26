import man from "../man.png";
import "./Car.css";

const Car = (props) => {
  const { merk, harga, isNew, colors, beli, gambar } = props;
  return (
    <card className="cards">
      <img src={gambar} alt="foto-mobil" />
      <div>
        <p>{merk}</p>
        <h3>Rp {harga}.000.000,-</h3>
        {/* <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5> */}
        {/* <h5>Varian Warna : {colors.map((color) => color + ", ")}</h5> */}
        <button onClick={beli}>Beli</button>
      </div>
    </card>
  );
};

export default Car;
