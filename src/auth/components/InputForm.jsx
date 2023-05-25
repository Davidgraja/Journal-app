export const InputForm = ({nameInput , valueInput, idInput , typeInput , placeholderInput ,textForLabel , eventChange}) => {
    return (
        <>
            { 
                textForLabel && <label htmlFor={idInput} className="font-medium text-gray-600">{textForLabel}</label>
            }
            <input  name={nameInput} value={ valueInput } onChange={ eventChange } id={idInput} type={typeInput} className="border-2  border-gray-400 p-2 rounded-md focus:outline  focus:outline-indigo-600" placeholder={placeholderInput} autoComplete="true"/>
        </>
    )
}

