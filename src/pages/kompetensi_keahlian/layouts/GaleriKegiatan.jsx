export default function GaleriKegiatan({ galeri }) {
  return (
    <div className="mx-auto px-4 sm:px-6 max-w-7xl mb-12">
      <p className="font-medium text-gray-700 text-3xl mb-3">Galeri Kegiatan</p>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {galeri.map((item) => (
              <div key={item.name} className="group relative bg-white">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-3 flex justify-between">
                  <div>
                    <p className="text-sm font-normal text-gray-700">{item.isi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}