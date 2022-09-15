/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import SmeaLogo from '../assets/img/smea.png'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const profil = [
  {
    name: 'Data Pokok Sekolah',
    href: '#',
  },
  {
    name: 'Visi Misi',
    href: '#',
  },
  {
    name: 'Struktur Organisasi',
    href: '#',
  },
  {
    name: 'Profil Kepala Sekola',
    href: '#',
  },
  {
    name: 'Profil Unggulan "CEREN"',
    href: '#',
  },
  {
    name: 'Data Siswa',
    href: '#',
  },
  {
    name: 'Road Map',
    href: '#',
  },
  {
    name: 'Denah',
    href: '#',
  },
  {
    name: 'Sarana, Prasarana Kegiatan Produktif Siswa',
    href: '#',
  },
  {
    name: 'Extrakurikuler',
    href: '#',
  },
  {
    name: 'Prestasi Sekolah',
    href: '#',
  },
]
const kompetensi = [
  {
    name: 'Akuntansi',
    href: '/akuntansi',
  },
  {
    name: 'Pemasaran',
    href: '/pemasaran',
  },
  {
    name: 'Manajemen Perkantoran',
    href: '/manajemen-perkantoran',
  },
  {
    name: 'Rekayasa Perangkat Lunak',
    href: '/rekayasa-perangkat-lunak',
  },
  {
    name: 'Teknik Komputer dan Jaringan',
    href: '/teknik-komputer-jaringan',
  },
  {
    name: 'Desain Komunikasi Visual',
    href: '/desain-komunikasi-visual',
  },
  {
    name: 'Teknik Pemesinan',
    href: '/teknik-pemesinan',
  },
  {
    name: 'Teknik Sepeda Motor',
    href: '/teknik-sepeda-motor',
  },
  {
    name: 'Teknik Logistik',
    href: '/teknik-logistik',
  },
  {
    name: 'Tataboga',
    href: '/tataboga',
  },
]
const sosmed = [
  {
    name: 'Youtube Official',
    href: 'https://www.youtube.com/c/SMKNegeri1SubangOfficial',
  },
  {
    name: 'Instagram Official',
    href: 'https://www.instagram.com/officialsmkn1subang/',
  },
  {
    name: 'Facebook Official',
    href: 'https://web.facebook.com/officialsmkn1subang/?_rdc=1&_rdr',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="sticky top-0 z-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={SmeaLogo}
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-700 hover:text-gray-900">
              Beranda
            </Link>

            {/* profil */}
            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-700',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>Profil</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-700',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {profil.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-700 hover:text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}

            {/* kompetensi */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-700',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>Kompetensi Keahlian</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-700',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {kompetensi.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-700 hover:text-gray-900">{item.name}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* sosmed */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-700',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>Sosial Media</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-700',
                        'ml-2 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {sosmed.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-700 hover:text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to="/informasi-terbaru" className="text-base font-medium text-gray-700 hover:text-gray-900">
              Informasi Terbaru
            </Link>
            <Link to="/galeri" className="text-base font-medium text-gray-700 hover:text-gray-900">
              Galeri
            </Link>

          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={SmeaLogo}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100">
                    <span className="ml-3 text-base font-medium text-gray-700 hover:text-gray-900">
                      Beranda
                    </span>
                  </Link>

                  {/* profil */}
                  {/* <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-700',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                          )}
                        >
                          <span className="ml-3">Profil</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-700',
                              'ml-2 h-5 w-5 group-hover:text-gray-900'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {profil.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                  >
                                    <div className="ml-4">
                                      <p className="text-sm font-medium text-gray-700 hover:text-gray-900">{item.name}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover> */}

                  {/* kompetensi */}
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-700',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                          )}
                        >
                          <span className="ml-3">Kompetensi Keahlian</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-700',
                              'ml-2 h-5 w-5 group-hover:text-gray-900'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {kompetensi.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                  >
                                    <div className="ml-4">
                                      <p className="text-sm font-medium text-gray-700 hover:text-gray-900">{item.name}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  {/* sosmed */}
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-700',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                          )}
                        >
                          <span className="ml-3">Sosial Media</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-700',
                              'ml-2 h-5 w-5 group-hover:text-gray-900'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {sosmed.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                                  >
                                    <div className="ml-4">
                                      <p className="text-sm font-medium text-gray-700 hover:text-gray-900">{item.name}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <Link to="/informasi-terbaru" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100">
                    <span className="ml-3 text-base font-medium text-gray-700 hover:text-gray-900">
                      Informasi Terbaru
                    </span>
                  </Link>

                  <Link to="/galeri" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-100">
                    <span className="ml-3 text-base font-medium text-gray-700 hover:text-gray-900">
                      Galeri
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
