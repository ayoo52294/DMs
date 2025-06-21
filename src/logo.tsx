import image from './assets/Yellow and Black Modern Media Logo (1).png'

export default function Logo() {
    return (
        <div className="flex items-center">
            <img
                src={image} // or directly use /images/your-image.png if not imported
                alt="DMS Logo"
                className="rounded-lg shadow-lg"
                width={100}
                height={90}
                loading="lazy"
            />
        </div>
    );
}