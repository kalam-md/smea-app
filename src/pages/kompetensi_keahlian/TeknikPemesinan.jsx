import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import GaleriKegiatan from "./layouts/GaleriKegiatan"
import { RPL, TKJ, AKL, DKV, MesinImg } from "../../assets/"

const mesinHeader =
{
  judul: 'Teknik Pemesinan',
  gambar: MesinImg,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Gambar Teknik Mesin"
  },
  {
    name: "Pekerjaan Dasar Teknik Mesin"
  },
  {
    name: "Dasar Perancangan Teknik Mesin"
  },
  {
    name: "Gambar Teknik Manufaktur"
  },
  {
    name: "Teknik Pemesinan Bubut"
  },
  {
    name: "Teknik Pemesinan Frais"
  },
  {
    name: "Teknik Pemesinan Gerinda"
  },
  {
    name: "Teknik Pemesinan NC/CNC dan CAM"
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

export default function TeknikPemesinan() {
  return (
    <>
      <JurusanHeader {...mesinHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
      <GaleriKegiatan galeri={galeriKegiatan} />
    </>
  )
}