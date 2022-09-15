import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import GaleriKegiatan from "./layouts/GaleriKegiatan"
import { RPL, TKJ, AKL, DKV } from "../../assets/"

const rplHeader =
{
  judul: 'Rekayasa Perangkat Lunak',
  gambar: RPL,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Pemrograman Dasar"
  },
  {
    name: "Jaringan Komputer Dasar"
  },
  {
    name: "Sistem Komputer"
  },
  {
    name: "Kerja Proyek"
  },
  {
    name: "Administrasi Database"
  },
  {
    name: "Pemrograman Web dan Perangkat Bergerak"
  },
  {
    name: "Pemodelan Perangkat Lunak"
  },
  {
    name: "Java Mobile"
  },
  {
    name: "Android Studio"
  },
]

const galeriKegiatan = [
  {
    imageSrc: RPL,
    imageAlt: "Lorem ipsum dolor sit amet.",
    isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imageSrc: TKJ,
    imageAlt: "Lorem ipsum dolor sit amet.",
    isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imageSrc: AKL,
    imageAlt: "Lorem ipsum dolor sit amet.",
    isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imageSrc: DKV,
    imageAlt: "Lorem ipsum dolor sit amet.",
    isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default function RekayasaPerangkatLunak() {
  return (
    <>
      <JurusanHeader {...rplHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
      <GaleriKegiatan galeri={galeriKegiatan} />
    </>
  )
}