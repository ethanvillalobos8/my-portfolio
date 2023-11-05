const Navigator = ({ currentPage }) => {
    const isVisible = currentPage !== 'home';

    return (
        <div 
            className={`fixed top-0 right-0 mt-12 mr-20 flex flex-col items-end font-light text-sm space-y-1 transition-opacity duration-200 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <button onClick={() => {document.getElementById("skills").scrollIntoView({behavior: 'smooth'})}} className={`${currentPage === 'skills' ? 'text-[#af70b3]' : 'hover:-translate-x-6 hover:text-[#af70b3] transition-all duration-300 ease-in-out'}`}>SKILLS</button>
            <button onClick={() => {document.getElementById("projects").scrollIntoView({behavior: 'smooth'})}} className={`${currentPage === 'projects' ? 'text-[#f4d160]': 'hover:-translate-x-6 hover:text-[#f4d160] transition-all duration-300 ease-in-out'}`}>PROJECTS</button>
            <button onClick={() => {document.getElementById("experience").scrollIntoView({behavior: 'smooth'})}} className={`${currentPage === 'experience' ? 'text-[#c8debf]': 'hover:-translate-x-6 hover:text-[#c8debf] transition-all duration-300 ease-in-out'}`}>EXPERIENCE</button>
        </div>
    );
}

export default Navigator;