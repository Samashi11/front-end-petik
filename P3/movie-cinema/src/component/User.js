const User = (props) => {
  const { nama, alamat, angkatan, hobies, isLulus, button, gambar } = props;
  return (
    <ul>
      <img src={gambar} alt="" width={264} />
      <li>Nama Mahasantri : {nama}</li>
      <li>Alamat Mahasantri : {alamat}</li>
      <li>Angkatan Ke-{angkatan}</li>
      <li>Hobi : {hobies.map((hobi) => hobi + ", ")}</li>
      <li>Status Mahasantri : {isLulus ? "Lulus" : "Sedang Belajar"}</li>
      <button onClick={() => button(nama)}>Profil</button>
    </ul>
  );
};

export default User;
