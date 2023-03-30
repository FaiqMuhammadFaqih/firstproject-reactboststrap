import Navigation from "./Navigation";
import Hero from './Hero';
import Jurusan from "./Jurusan";
import Card1 from "./../Assets/jurusan1.png";
import Card2 from "./../Assets/jurusan2.png";
import Card3 from "./../Assets/jurusan3.png";
import Kegiatan from "./Kegiatan";
import Acara1 from "./../Assets/kegiatan1.png"
import Acara2 from "./../Assets/kegiatan2.png"
import Acara3 from "./../Assets/kegiatan3.png"
import Acara4 from "./../Assets/kegiatan4.png"
import Acara5 from "./../Assets/kegiatan5.png"



const Main = () => {
    return(
        <div>
            <Navigation />
            <Hero/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>
                <div/>
                <div className="row justify-content-center">
                        <div className="col-4">
                            <Jurusan image={Card1} judul="Multimedia"/>
                        </div>
                        <div className="col-4">
                            <Jurusan image={Card2} judul="Teknik Computer & Jaringan "/>
                        </div>
                        <div className="col-4">
                            <Jurusan image={Card3} judul="Rekayasa Perangkat Lunak"/>
                        </div>
                </div>
                <div className="row">
                        <div className="col-12 text-center my-5">
                            <h1>Kegiatan Sekolah</h1>
                        </div>
                </div>
                <div className="row gap-3 mb-5">
                        <div className="col-12">
                            <Kegiatan image={Acara1} deskripsi="Badminton"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={Acara2} deskripsi="Bela Diri"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={Acara3} deskripsi="Berenang"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={Acara4} deskripsi="Memasak"/>
                        </div>
                        <div className="col-12">
                            <Kegiatan image={Acara5} deskripsi="Memanah"/>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main;