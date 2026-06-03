function Input({ placehoder, icon }) {
    return (<>


        <div className="w-full">
            <div className="flex items-center gap-3 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus-within:border-[var(--main-color)] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <i class={`fa-solid ${icon}`}></i>
                <input id={placehoder}
                    type="text"
                    name={placehoder} required
                    autocomplete={placehoder}
                    className="block w-full rounded-md bg-transparent"
 />
            </div>

        </div>


    </>)
}

export default Input;