/* eslint-disable array-callback-return */
export default function KompetensiDasar({ kompDasar }) {
  return (
    <div className="mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="mb-6">
        <p className="font-medium text-gray-700 text-3xl mb-3">Kompetensi Dasar</p>
        {kompDasar.map((item) => (
          <p key={item.name} className="font-normal text-gray-600 text-base flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 mr-2">
              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
            </svg>
            {item.name}
          </p>
        ))}
      </div>
    </div>
  )
}