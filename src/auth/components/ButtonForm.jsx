export const ButtonForm = ({titleForButton, textForButton}) => {
    return (
        <button title={titleForButton} className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500">{ textForButton }</button>
    )
}
