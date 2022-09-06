import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import TKJ from "../../assets/img/tkj.jpg"

const tkjHeader =
{
  judul: 'Teknik Komputer dan Jaringan',
  gambar: TKJ,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Komputer dan Jaringan Dasar"
  },
  {
    name: "Pemrograman Dasar"
  },
  {
    name: "Dasar Desain Grafis"
  },
  {
    name: "Teknologi Jaringan Berbasis Luas (WAN)"
  },
  {
    name: "Administrasi Insfrastruktur Jaringan"
  },
  {
    name: "Administrasi Sistem Jaringan"
  },
  {
    name: "Teknologi Layanan Jaringan"
  },
  {
    name: "Produk Kreatif dan Kewirausahaan"
  },
]

export default function TeknikKomputerJaringan() {
  return (
    <>
      <JurusanHeader {...tkjHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
    </>
  )
}