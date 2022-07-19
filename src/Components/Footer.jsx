
const Footer = () => {
    return (
        <div className="Footer flex flex-col h-60 bottom-0 bg-[#201F1F] w-full pt-6 items-center">
            <div className="flex justify-between text-gray-300 w-8/12 text-xs ">
                {/* Column1 */}
                <ul className="flex flex-col justify-self-start gap-3 sm:visible sm:justify-center">
                    <li>Audio And Subtitles</li>
                    <li>Media Center</li>
                    <li>Security</li>
                    <li>Contact us</li>
                </ul>
                {/* Column2 */}
                <ul className="flex flex-col gap-3 invisible md:visible">
                    <li>Audio Description</li>
                    <li>Investor Relations</li>
                    <li>Legal Provisions</li>
                </ul >
                {/* Column3 */}
                <ul className="flex flex-col gap-3 invisible md:visible" >
                    <li>Help Center</li>
                    <li>Job</li>
                    <li>Cookies Preferences</li>
                </ul>
                {/* Column 4 */}
                <ul className="flex flex-col gap-3 invisible md:visible">
                    <li>Gift Card</li>
                    <li>Terms of Use</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="flex flex-col text-gray-300 text-sm py-3 gap-3 w-8/12 sm:visible items-start ">
                <p className="border py-1 px-1 w-content">Service Code</p>
                <p>© 2022 Zaky Naufal & Yazid Yasykur</p>
            </div>
        </div>


    );
};

export default Footer