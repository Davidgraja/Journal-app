export const InputForm = ({nameInput , idInput , typeInput , placeholderInput ,textForLabel}) => {
    return (
        <>
            { 
                textForLabel && <label htmlFor={idInput} className="font-medium text-red-600">{textForLabel}</label>
            }
            <input  name={nameInput} id={idInput} type={typeInput} className="border-2  border-gray-400 p-2 rounded-md focus:outline  focus:outline-indigo-600" placeholder={placeholderInput} required/>
        </>
    )
}

