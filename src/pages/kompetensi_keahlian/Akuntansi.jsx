import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import GaleriKegiatan from "./layouts/GaleriKegiatan"
import { RPL, TKJ, AKL, DKV } from "../../assets/"

const aklHeader =
{
  judul: 'Akuntansi',
  gambar: AKL,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Etika Profesi"
  },
  {
    name: "Aplikasi Pengolah Angka / Spreadsheet"
  },
  {
    name: "Akuntansi Dasar"
  },
  {
    name: "Perbankan Dasar"
  },
  {
    name: "Praktikum Akuntansi Perusahaan Jasa, Dagang, dan Manufaktur"
  },
  {
    name: "Praktikum Akuntansi Lembaga / Instansi Pemerintah"
  },
  {
    name: "Akuntansi Keuangan"
  },
  {
    name: "Komputer Akuntansi"
  },
  {
    name: "Administrasi Pajak"
  },
  {
    name: "Produk Kreatif dan Kewirausahaan"
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

export default function Akuntansi() {
  return (
    <>
      <JurusanHeader {...aklHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
      <GaleriKegiatan galeri={galeriKegiatan} />
    </>
  )
}