export const ButtonForm = ({titleForButton, textForButton , clickEvent}) => {
    return (
        <button title={titleForButton} className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500" onClick={ clickEvent }>{ textForButton }</button>
    )
}
