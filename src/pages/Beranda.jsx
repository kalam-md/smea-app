import { RPL, TKJ, AKL, DKV, Hero, Orang1 } from "../assets/"

export default function Beranda() {
  return (
    <div className="bg-white">
      <div className="bg-gray-600 bg-blend-multiply bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
        <div className="mx-auto px-4 sm:px-6 max-w-7xl h-[70vh] flex flex-col justify-center items-center">
          <h1 className="text-6xl font-semibold text-white text-center">Selamat Datang</h1>
          <p className="text-4xl font-semibold text-white text-center pt-2">SMKN 1 Subang</p>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 max-w-7xl pt-12 pb-12">
        <div className="grid sm:grid-cols-3 grid-cols-1">
          <div className="pr-7 col-span-2">
            <p className="font-medium text-gray-700 text-3xl mb-3">Deden Suryanto, M. Pd.</p>
            <p className="font-normal text-gray-700 text-xl mb-3">Kepala SMK Negeri 1 Subang - NIP. 19740315 199903 1 006</p>
            <p className="font-normal text-gray-700 text-base mb-2">
              Assalamualaikum wr wb, selamat datang di kampus SMKN 1 Subang, sekolah yang menerapkan model “C E R E N”, dengan motto : “We are The First, and Our Commitment is Your Satisfaction“. Kami sekolah yang menerapkan program penumbuhkembangan dan pembinaan karakter siswa dengan Program Character building meliputi kegiatan pokok Islamic School Culture (ISC), Bela Negara dan kebersamaan.
            </p>
            <p className="font-normal text-gray-700 text-base mb-2">
              Menanamkan jiwa kewirausahaan yaitu mampu membaca peluang, pantang menyerah, berani, ulet dan bekerja keras, mewujudkan lulusan yang mampu beradaptasi dengan perkembangan zaman, mewujudkan lulusan yang professional di bidangnya dan mewujudkan lulusan yang peduli terhadap lingkungan sekitar baik secara nasional maupun global.
            </p>
            <p className="font-normal text-gray-700 text-base mb-2">
              Seluruh program tersebut terintegrasi dalam model yang kami terapkan yaitu model C E R E N. kami menyambut dengan tangan terbuka seluruh peserta didik yang berhasil diterima sebagai siswa di sekolah kami, InsyaAllah kami sepenuh hati melaksanakan komitmen untuk memuaskan berbagai pihak terutama siswa, orang tua dan IDUKA (Industri, Dunia Usaha, dan Wirausaha) serta pemerintahan daerah baik kabupaten, provinsi maupun Pemerintah Republik Indonesia.
            </p>
            <p className="font-normal text-gray-700 text-base mb-3">
              Kami juga komitmen untuk pengembangan smart school dengan konsep “One forl All”, pengembangan program SMK Masuk Desa, program Start Up for Bussiness, juga program center of excellence. semoga Allah SWT selalu melindungi kita semua dan memberikan kemudahan, kelancaran dan bimbingan Nya. AAmmiin. Wassalamualaikum wr wb
            </p>
          </div>
          <div className="order-1">
            <img src={Orang1} alt="" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}