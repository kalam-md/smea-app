export default function JurusanHeader(props) {
  return (
    <>
      <div className="bg-gray-800 bg-blend-overlay" style={{ backgroundImage: `url(${props.gambar})` }}>
        <div className="mx-auto px-4 sm:px-6 max-w-7xl h-[50vh] flex items-center">
          <h1 className="text-6xl font-semibold text-white">{props.judul}</h1>
        </div>
      </div>
      <div className="mx-auto pt-12 pb-6 px-4 sm:px-6 max-w-7xl">
        <p className="font-normal text-base text-gray-700">{props.isi}</p>
      </div>
    </>
  )
}