export const deletePhoto = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_CLOUDINARY_URL}?id=${id}&folder=journal-app&typeResource=image`,{
        method : "DELETE",
    });

    const {ok , message} = await res.json();

    return{
        ok ,
        message
    }
}
