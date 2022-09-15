import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import {
  Beranda,
  InformasiTerbaru,
  Galeri,
  Akuntansi,
  DesainKomunikasiVisual,
  Tataboga,
  ManajemenPerkantoran,
  Pemasaran,
  RekayasaPerangkatLunak,
  TeknikKomputerJaringan,
  TeknikLogistik,
  TeknikPemesinan,
  TeknikSepedaMotor,
} from "./pages"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/informasi-terbaru" element={<InformasiTerbaru />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/akuntansi" element={<Akuntansi />} />
        <Route path="/desain-komunikasi-visual" element={<DesainKomunikasiVisual />} />
        <Route path="/tataboga" element={<Tataboga />} />
        <Route path="/manajemen-perkantoran" element={<ManajemenPerkantoran />} />
        <Route path="/pemasaran" element={<Pemasaran />} />
        <Route path="/rekayasa-perangkat-lunak" element={<RekayasaPerangkatLunak />} />
        <Route path="/teknik-komputer-jaringan" element={<TeknikKomputerJaringan />} />
        <Route path="/teknik-logistik" element={<TeknikLogistik />} />
        <Route path="/teknik-pemesinan" element={<TeknikPemesinan />} />
        <Route path="/teknik-sepeda-motor" element={<TeknikSepedaMotor />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
