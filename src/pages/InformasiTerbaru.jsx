import { RPL, TKJ, DKV, OTKP, InformasiImg } from "../assets/"

const informasi = [
  {
    judul: "Lorem ipsum",
    isi: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, aliquam delectus? Beatae voluptates dolores recusandae at vitae sed id consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum.",
    gambar: RPL
  },
  {
    judul: "Lorem ipsum dolor",
    isi: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, aliquam delectus? Beatae voluptates dolores recusandae at vitae sed id consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum.",
    gambar: TKJ
  },
  {
    judul: "Lorem ipsum dolor sit",
    isi: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, aliquam delectus? Beatae voluptates dolores recusandae at vitae sed id consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum.",
    gambar: OTKP
  },
  {
    judul: "Lorem ipsum dolor sit amet",
    isi: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, aliquam delectus? Beatae voluptates dolores recusandae at vitae sed id consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cum.",
    gambar: DKV
  },
]

export default function InformasiTerbaru() {
  return (
    <div className="">
      <div className="bg-gray-800 bg-blend-overlay" style={{ backgroundImage: `url(${InformasiImg})` }}>
        <div className="mx-auto px-4 sm:px-6 max-w-7xl h-[50vh] flex items-center">
          <h1 className="text-6xl font-semibold text-white">Informasi Terbaru</h1>
        </div>
      </div>
      <div className="mx-auto pt-12 px-4 sm:px-6 max-w-7xl">
        <p className="font-normal text-base text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus sit necessitatibus sapiente natus doloremque amet, doloribus ipsa praesentium inventore excepturi aut debitis, unde quod ad eveniet. Sequi, voluptate suscipit? Fuga architecto provident tenetur quisquam, unde dicta delectus quod a ipsam vel, voluptatum velit sunt quia ratione, quibusdam rerum natus?</p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 items-center gap-y-8 gap-x-8 py-12 px-4 sm:px-6">
        {informasi.map((item) => (
          <div key={item.judul}>
            <img src={item.gambar} alt="#" className="rounded-md h-full w-full object-cover object-center hover:opacity-75" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-4">{item.judul}</h2>
            <p className="mt-4 text-gray-500">
              {item.isi}
              <span className="text-purple-600 cursor-pointer"> selanjutnya...</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}