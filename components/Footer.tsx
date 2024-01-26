interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div
            className={`${className} text-white text-[12px] sm:text-sm flex justify-center items-center m-auto pt-20 md:pt-10`}
        >
            Made by{"  "}
            <a
                href="https://github.com/ahmbarreiros"
                target="_blank"
                className="mx-2 hover:text-neutral-300 transition"
            >
                {" "}
                Antônio Barreiros
            </a>
            &copy; 2024
        </div>
    );
};
export default Footer;
