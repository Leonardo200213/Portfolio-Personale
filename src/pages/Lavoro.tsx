import { images } from "../assets/images";

export default function Lavoro(){
    return(
        <>
            {/**esaote */}
            <div className="max-w-4xl mx-auto mt-15">
                <h1 className="text-4xl font-bold ml-10 md:ml-0">Lavoro</h1>

                <div className="flex justify-center">
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        <img src={images.esaote} className="w-120"/>
                    </h1>
                </div>
                <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                    Lavoro presso esote dove ho imparato il lavoro manuale ...
                </h1>
                <h1>
                    Da Aprile 2022 a ora
                </h1>
            </div>

            {/**rgis */}
            <div className="max-w-4xl mx-auto mt-15">
                <div className="flex justify-center">
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        <img src={images.rgis} className="w-120"/>
                    </h1>
                </div>
                <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                    Lavoro presso esote dove ho imparato il lavoro manuale ...
                </h1>
                <h1>
                    Da Ottobre 2021 a Gennaio 2022
                </h1>
            </div>

            <div className="max-w-4xl mx-auto mt-15">
                <h1 className="text-4xl font-bold ml-10 md:ml-0">Corsi</h1>
                <div className="justify-center ">
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        Typescript 4 ore
                    </h1>
                    <h1>
                        2025
                    </h1>
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        Tailwind 5 ore
                    </h1>
                    <h1>
                        2025
                    </h1>
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        React 7 ore
                    </h1>
                    <h1>
                        2025
                    </h1>
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        Python 4 ore
                    </h1>
                    <h1>
                        2024
                    </h1>
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        Tech camp gaming 6 ore
                    </h1>
                    <h1>
                        2024
                    </h1>
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        Metodologia 5S e team building
                    </h1>
                    <h1>
                        2023
                    </h1>
                    <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
                        PCTO Samsung Let's App 4 ore
                    </h1>
                    <h1>
                        2020
                    </h1>
                </div>
            </div>
        </>
    );
}