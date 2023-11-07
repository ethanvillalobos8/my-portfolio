const Navigator = ({ currentPage }) => {
    const isVisible = currentPage !== 'home';

    return (
        <div 
            className={`max-md:hidden fixed top-0 right-0 mt-12 mr-20 flex flex-col items-end font-light text-sm space-y-1 z-50 transition-opacity duration-200 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <button onClick={() => {document.getElementById("skills").scrollIntoView({behavior: 'smooth'})}} className={`${currentPage === 'skills' ? 'text-[#af70b3] font-bold text-lg duration-300 ease-in-out': 'text-zinc-50'}`}>SKILLS</button>
            <button onClick={() => {document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}} className={`${currentPage === 'projects' ? 'text-[#f4d160] font-bold text-lg duration-300 ease-in-out': 'text-zinc-50'}`}>PROJECTS</button>
            <button onClick={() => {document.getElementById("experience").scrollIntoView({behavior: 'smooth'})}} className={`${currentPage === 'experience' ? 'text-[#c8debf] font-bold text-lg duration-300 ease-in-out': 'text-zinc-50'}`}>EXPERIENCE</button>
        </div>
    );
}

export default Navigator;