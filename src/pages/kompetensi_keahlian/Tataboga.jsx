import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import GaleriKegiatan from "./layouts/GaleriKegiatan"
import { RPL, TKJ, AKL, DKV, TatabogaImg } from "../../assets/"

const tatabogaHeader =
{
  judul: 'Tataboga',
  gambar: TatabogaImg,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Keamanan Pangan (Sanitasi, Higienis, dan Keselamatan Kerja)"
  },
  {
    name: "Pengetahuan Bahan Makanan"
  },
  {
    name: "Boga Dasar"
  },
  {
    name: "Ilmu Gizi"
  },
  {
    name: "Tata Hidang"
  },
  {
    name: "Pengolahan dan Penyajian Makanan"
  },
  {
    name: "Produk Cake, dan Kue Indonesia"
  },
  {
    name: "Produk Pastry dan Bakery"
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

export default function Tataboga() {
  return (
    <>
      <JurusanHeader {...tatabogaHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
      <GaleriKegiatan galeri={galeriKegiatan} />
    </>
  )
}