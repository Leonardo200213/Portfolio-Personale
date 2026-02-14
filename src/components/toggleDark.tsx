export default function toggleDark(){
    return(
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer"/>
                <div className="relative w-9 h-5 bg-neutral-quaternary rounded-full
                    peer transition-colors duration-700 bg-yellow-700 peer-checked:bg-blue-700 shadow-md/50
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
                    after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-4
                    after:w-4 after:transition-transform after:transition-colors after:duration-900 ">
                </div>
            <span className="select-none ms-3 text-sm font-medium text-heading"/>
        </label>
    );
}

