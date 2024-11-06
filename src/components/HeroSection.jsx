import Process from "./Process"
const HeroSection = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://tgihost.pages.dev/image?id=BQACAgUAAx0EfBziBwACAZRnJNHxK_4ThEJVFwxMU3FYFUaEdAACFxEAAqBZKVWOpwMzgK9AAjYE)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="flex flex-col justify-center items-center w-11/12 sm:w-10/12 lg:w-9/12 max-w-5xl mx-auto rounded-lg mt-10 min-h-[36rem] h-auto text-center bg-white shadow-lg">
                <div className="w-full px-4 md:px-8 lg:px-12 py-6">
                    <ul className="w-full text-slate-800 steps my-4 text-xs sm:text-sm md:text-base ">
                        <li className="step step-primary">Location</li>
                        <li className="step">Seat Select</li>
                        <li className="step">Confirm Payment</li>
                    </ul>
                </div>
                <Process/>
            </div>
        </div>
    )
}
export default HeroSection
