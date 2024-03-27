import "./User.css";

const User = (props) => {
  const { nama, member, message, subscribe, id } = props;
  const tableStyle = {
    border: "1px solid black",
    width: "300px",
    margin: "20px auto",
  };
  const headerStyle = {
    textAlign: "center",
    fontWeight: "bold",
  };
  const cellStyle = { textAlign: "center" };
  return (
    <>
      <table className="card">
        <thead className="card-head">
          <tr>
            <td colSpan={2}>{nama}</td>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr>
            <td colSpan={2}>{member}</td>
            {/* <p>{id}</p> */}
          </tr>
          <tr>
            <td>
              <button onClick={() => message(nama)}>Message</button>
            </td>
            <td>
              <button onClick={() => subscribe(nama, member)}>Subscribe</button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </>

    /**
     * <ul>
      <img src={gambar} alt="" width={264} />
      <li>Nama Mahasantri : {nama}</li>
      <li>Alamat Mahasantri : {alamat}</li>
      <li>Angkatan Ke-{angkatan}</li>
      <li>Hobi : {hobies.map((hobi) => hobi + ", ")}</li>
      <li>Status Mahasantri : {isLulus ? "Lulus" : "Sedang Belajar"}</li>
      <button onClick={() => button(nama)}>Profil</button>
      </ul>
    */
  );
};

export default User;
