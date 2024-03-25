import man from "./man.png"

const Car = (props) => {
  const { merk, harga, isNew, colors, beli, gambar } = props;
  return (
    <>
      <img src={gambar} alt="foto-mobil" width={500} />
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : {harga} Miliyar</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h5>Barian Warna : {colors.map((color) => color + ", ")}</h5>
      <button onClick={beli}>Beli</button>
    </>
  );
};

export default Car;
