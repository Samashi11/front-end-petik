import User from "../User/User.js";
import Car from "../Car/Car.js";
import Movies from "../Movies/Movies.js";
import Hero from "../Hero/Hero.js";
import "./Main.css";

const Main = () => {
  const Users = [
    {
      nama: "Agung",
      member: "Platinum",
    },
    {
      nama: "Samsul",
      member: "Gold",
    },
    {
      nama: "Asep",
      member: "Silver",
    },
    {
      nama: "Agus",
      member: "Silver",
    },
    {
      nama: "Bambang",
      member: "Platinum",
    },
    {
      nama: "Kevin",
      member: "Silver",
    },
    {
      nama: "Akmal",
      member: "Silver",
    },
    {
      nama: "Reno",
      member: "Non Member",
    },
    {
      nama: "Galang",
      member: "Gold",
    },
    {
      nama: "Dadang",
      member: "Platinum",
    },
  ];
  return (
    <>
      <div></div>
      <div className="content">
        {/* <Car
          gambar="https://cdn0-production-images-kly.akamaized.net/FzEkirLZctw0ZIlj7Ap5q87i9I4=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4311406/original/072797400_1675327200-liputan6-bugatti-chiron-profilee-01.jpg"
          merk="Bugatti"
          harga={500}
          isNew={true}
          colors={["Hitam", "Putih", "Abu-Abu"]}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5215885.jpg&f=1&nofb=1&ipt=32c80dec1ce61ecdc89fc38871570d3f7c34c1d2b48a104938b303e032bdd0be&ipo=images"
          merk="Ferrari"
          harga={570}
          isNew={true}
          colors={["Hitam", "Putih", "Abu-Abu"]}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://images.tokopedia.net/img/KRMmCm/2024/2/7/dd3c8623-bf0e-4283-a8c7-4a6cb9d188c2.jpg"
          merk="Lamborghini"
          harga={700}
          isNew={true}
          colors={["Hitam", "Putih", "Abu-Abu"]}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://images.drive.com.au/driveau/image/private/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/ca-s3/2013/08/toyota-supra--e1375969681104-625x322"
          merk="Toyota Supra"
          harga={840}
          isNew={true}
          colors={["Hitam", "Putih", "Abu-Abu"]}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqV2I7Y8fcXBQ1ULK-pxqLPjZXzbYRNt_vw&usqp=CAU"
          merk="McLarren GTS"
          harga={490}
          isNew={true}
          colors={["Hitam", "Putih", "Abu-Abu"]}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo06f2zdcyF5Sty0EvBhIb3qEPNFJK2dAkdg&usqp=CAU"
          merk="Landrover"
          harga={900}
          isNew={true}
          colors={["Hitam", "Putih", "Abu-Abu"]}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8qgVCZgKsQ-X9mhiWU4uhGH3Rcz9DuxsCQ&usqp=CAU"
          merk="Rolls Royce Phantom"
          harga={900}
          isNew={true}
          colors={["Hitam", "Putih", "Abu-Abu"]}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2023/05/26/db12-ajpg-20230526071550.jpg"
          merk="Aston Martin DB12"
          harga={870}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLpM1Bxn8dsrqnMRSvdYQwIgWepJnXKEiUQ&usqp=CAU"
          merk="Hummer H1 Alpha"
          harga={610}
          beli={() => alert("Sudah Dibeli")}
        />
        <Car
          gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzef-0yNtxciMxeRzQz7knCFaqVhmjKHCBfA&usqp=CAU"
          merk="Porsche"
          harga={970}
          beli={() => alert("Sudah Dibeli")}
        /> */}
        <Hero />
        <Movies />
        {Users.map((user, index) => {
          return (
            <User
              nama={user.nama}
              member={user.member}
              // id={index}
              message={(nama) => alert("Profil " + nama + " telah dibuka")}
              subscribe={(nama, member) =>
                alert("Profil " + nama + " telah berlangganan member " + member)
              }
            />
          );
        })}
        ;
      </div>
    </>
  );
};
export default Main;
