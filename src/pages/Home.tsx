import github from "../assets/github.png"

export default function Home() {
    return(
        <div className="grid grid-cols-2 gap-4 max-w-196 mx-auto w-full px-4">
            <div className="flex items-center justify-center border-2 rounded-full p-8">
                linnkedin
            </div>
            <div className="flex items-center justify-center border-2 rounded-3xl">
                <img src={github} className="m-10"/>
            </div>
        </div>
    )
}