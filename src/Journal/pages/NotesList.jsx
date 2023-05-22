import { NoteCard } from "../components/NoteCard"

export const NotesList = () => {
    const date = new Date().toLocaleString()
    return (
        <section className=" p-2 w-full justify-center grid grid-cols-noteList md:justify-evenly gap-y-4 ">
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            <NoteCard title={'title of note'} date={date}/>
            
        </section>
    )
}
