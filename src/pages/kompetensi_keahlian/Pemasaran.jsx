import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import PemasaranImg from "../../assets/img/pemasaran.jpg"

const pemasaranHeader =
{
  judul: 'Pemasaran',
  gambar: PemasaranImg,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Marketing"
  },
  {
    name: "Perencanaan Bisnis"
  },
  {
    name: "Komunikasi Bisnis"
  },
  {
    name: "Penataan Produk"
  },
  {
    name: "Bisnis Online"
  },
  {
    name: "Administrasi Transaksi"
  },
  {
    name: "Pengelolaan Bisnis Ritel"
  },
  {
    name: "Produk Kreatif dan Kewirausahaan"
  },
]

export default function Pemasaran() {
  return (
    <>
      <JurusanHeader {...pemasaranHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
    </>
  )
}