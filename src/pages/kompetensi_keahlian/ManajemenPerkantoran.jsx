import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import OTKP from "../../assets/img/otkp.jpg"

const otkpHeader =
{
  judul: 'Manajemen Perkantoran',
  gambar: OTKP,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Teknologi Perkantoran"
  },
  {
    name: "Korespondensi"
  },
  {
    name: "Kearsipan"
  },
  {
    name: "Otomatisasi Tata Kelola Kepegawaian"
  },
  {
    name: "Otomatisasi Tata Kelola Keuangan"
  },
  {
    name: "Otomatisasi Tata Kelola Sarana dan Prasarana"
  },
  {
    name: "Otomatisasi Tata Kelola Humas dan Keprotokolan"
  },
  {
    name: "Mengembangkan Produk Kreatif dan Kewirausahaan"
  },
]

export default function ManajemenPerkantoran() {
  return (
    <>
      <JurusanHeader {...otkpHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
    </>
  )
}