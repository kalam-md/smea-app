import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import DKV from "../../assets/img/dkv.jpg"

const dkvHeader =
{
  judul: 'Desain Komunikasi Visual',
  gambar: DKV,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Dasar-dasar Kegrafikaan"
  },
  {
    name: "Kalkulasi Grafika"
  },
  {
    name: "Pengolahan Limbah Industri Percetakan"
  },
  {
    name: "Perwajahan"
  },
  {
    name: "Desain Grafis"
  },
  {
    name: "Susun Huruf komputer"
  },
  {
    name: "Pembuatan Acuan Cetak dan Montase"
  },
  {
    name: "Produk Kreatif dan Kewirausahaan"
  },
]

export default function DesainKomunikasiVisual() {
  return (
    <>
      <JurusanHeader {...dkvHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
    </>
  )
}