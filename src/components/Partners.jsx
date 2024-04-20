import React from 'react';
import BallAndChain from '../assets/partners/BallAndChain.png';
import Baltimore from '../assets/partners/Baltimore.png';
import Cheeca from '../assets/partners/Cheeca.png';
import Dolphin from '../assets/partners/Dolphin.png';
import Frail from '../assets/partners/Frail.png';
import Grazianos from '../assets/partners/Grazianos.png';
import HardRock from '../assets/partners/HardRock.png';
import Image from '../assets/partners/Image.png';
import IslandGrill from '../assets/partners/IslandGrill.png';
import magic from '../assets/partners/magic.png';
import MIA from '../assets/partners/MIA.png';
import Montys from '../assets/partners/Montys.png';
import Rusty from '../assets/partners/Rusty.png';
import RustyPelican from '../assets/partners/Rustypelican.png';
import Vezasur from '../assets/partners/VezaSur.png';

const images = [
    BallAndChain,
    Baltimore,
    Cheeca,
    Dolphin,
    Frail,
    Grazianos,
    HardRock,
    Image,
    IslandGrill,
    magic,
    MIA,
    Montys,
    Rusty,
    RustyPelican,
    Vezasur
];

const HomeSlider = () => {
    return (
        <div className=" mx-auto px-10 home-slider bg-[#110A0C] flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl sm:mb-4 font-semibold text-white mt-6 lg:pt-6">Some of our clients</h1>
            <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  xl:mb-15">
                {images.map((image, index) => (
                    <div key={index} className="relative flex justify-center">
                        <img
                            src={image}
                            alt={`Client ${index + 1}`}
                            className="object-contain rounded-lg mb-2 hover:opacity-40 p-16 transition-opacity duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeSlider;
