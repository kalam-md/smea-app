import JurusanHeader from "./layouts/JurusanHeader"
import KompetensiDasar from "./layouts/KompetensiDasar"
import Logistik from "../../assets/img/logistik.jpg"

const logistikHeader =
{
  judul: 'Teknik Logistik',
  gambar: Logistik,
  isi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis deserunt veniam tenetur? Quibusdam earum dignissimos asperiores repellat tempora facere, numquam odit officia molestiae cupiditate cum sequi sit aperiam. Sint ex quo qui et excepturi quibusdam eaque consectetur aut? Natus laudantium nostrum perferendis molestias magni ipsam, veritatis cupiditate nobis delectus!',
}

const kompDasar = [
  {
    name: "Gambar Teknik"
  },
  {
    name: "Penanganan Material dan Sikap Kerja"
  },
  {
    name: "Pengendalian Persediaan"
  },
  {
    name: "Pengendalian Dokumen Administrasi Gudang"
  },
  {
    name: "Pergudangan"
  },
  {
    name: "Material Handling Equipment"
  },
  {
    name: "Logistik Multimoda"
  },
  {
    name: "Produk Kreatif dan Kewirausahaan"
  },
]

export default function TeknikLogistik() {
  return (
    <>
      <JurusanHeader {...logistikHeader} />
      <KompetensiDasar kompDasar={kompDasar} />
    </>
  )
}