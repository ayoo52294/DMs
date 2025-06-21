import GifThumb from './assets/dms video thumbnail.gif'

export default function Gif() {
    return (
        <section className='items-center overflow-y-hidden'>
        <div className="mx-auto max-w-5xl" data-aos="fade-up" data-aos-delay={800}>
            <img
                src={GifThumb} // or directly use /images/your-gif.gif if not imported
                alt="Cybersecurity Animation"
                className="rounded-lg shadow-lg"
                width={300}
                height={200}
                loading="lazy"
            />
        </div>

        </section>
    )
}