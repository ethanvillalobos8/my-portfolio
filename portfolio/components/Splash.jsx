const Splash = () => {
    return (
        <main className="grid grid-cols-1 min-h-screen w-screen bg-[#0C090A]">
            <section className='h-screen w-screen flex items-center justify-center'>
                <div className="flex flex-col self-center items-center" style={{ fontFamily: 'museo' }}>
                    <img className="w-20 h-20 splash" src="/images/signature-white.png" alt="hero" />
                </div>
            </section>
        </main>
    );
};

export default Splash;  
