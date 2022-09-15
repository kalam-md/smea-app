import { RPL, TKJ, DKV, MesinImg } from "../assets/"

export default function Galeri() {
  return (
    <div className="mx-auto py-12 px-4 sm:px-6 max-w-7xl">
      <p className="text-6xl font-semibold text-center pb-12">Galeri Kegiatan</p>
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <img
            src={DKV}
            alt={DKV}
            className="h-full w-full object-cover object-center hover:opacity-75"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src={TKJ}
              alt={TKJ}
              className="h-full w-full object-cover object-center hover:opacity-75"
            />
          </div>
          <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img
              src={RPL}
              alt={RPL}
              className="h-full w-full object-cover object-center hover:opacity-75"
            />
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <img
            src={MesinImg}
            alt={MesinImg}
            className="h-full w-full object-cover object-center hover:opacity-75"
          />
        </div>
      </div>
    </div>
  )
}