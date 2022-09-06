import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import Motor from "../../assets/img/motor.jpg"

const motorHeader =
{
  judul: 'Teknik Sepeda Motor',
  gambar: Motor,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Perawatan berkala Sepeda Motor"
  },
  {
    name: "Perawatan dan Perbaikan engine Sepeda Motor"
  },
  {
    name: "Perawatan dan Perbaikan sasis Sepeda Motor"
  },
  {
    name: "Perawatan dan Perbaikan kelistrikan Sepeda Motor"
  },
  {
    name: "Perawatan Bengkel Sepeda Motor"
  },
  {
    name: "Produk Kreatif dan Kewirausahaan"
  },
]

export default function TeknikSepedaMotor() {
  return (
    <>
      <JurusanHeader {...motorHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
    </>
  )
}