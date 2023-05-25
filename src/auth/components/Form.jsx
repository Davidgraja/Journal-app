import { Link } from "react-router-dom"

export const Form = ({ children , formTitle , textForLink , directionOfLink , onClickEvent}) => {
    return (
    <section className="h-full flex  place-content-center place-items-center">
        
        <section className=" p-2 m-3 w-full md:w-[500px]">

            <h1 className=" text-center text-2xl font-semibold">{ formTitle }</h1>

            <form className=" mt-10 flex flex-col gap-y-5" onClick={ onClickEvent }>

                {
                    children
                }
                
                <Link to={directionOfLink} className="text-end underline text-indigo-600 font-medium">{textForLink}</Link>
            </form>
        </section>
    </section>
    )
}
