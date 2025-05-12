import React from "react";
import image3 from "../assets/logo.png"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/Whatsapp.svg";

export const MacbookPro = () => {
    return (
        <div className="bg-[#fff6ef] flex flex-row justify-center w-full">
            <div className="bg-[#fff6ef] w-[1512px] h-[982px]">
                <div className="justify-center gap-[15px] left-[49px] inline-flex items-center relative">
                    <img
                        className="relative w-[220px] h-[93px]"
                        alt="Image"
                        src={image3}
                    />

                    <div className="gap-[30px] px-0 py-3 flex-[0_0_auto] inline-flex items-center relative">
                        <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                            <div className="relative w-[171px] h-7 mt-[-1.00px] [font-family:'Source_Serif_Pro-SemiBold',Helvetica] font-semibold text-[#f9c74f] text-2xl text-center tracking-[0] leading-[normal] underline whitespace-nowrap">
                                Home
                            </div>

                            <div className="relative w-[171px] h-7 mt-[-1.00px] [font-family:'Source_Serif_Pro-Regular',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                Timeline
                            </div>

                            <div className="relative w-[170px] h-7 mt-[-1.00px] [font-family:'Source_Serif_Pro-Regular',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                Cross- Punched
                            </div>

                            <div className="relative w-[171px] h-7 mt-[-1.00px] [font-family:'Source_Serif_Pro-Regular',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                About Us
                            </div>

                            <div className="relative w-[171px] h-7 mt-[-1.00px] [font-family:'Source_Serif_Pro-Regular',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
                                Contact Us
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-9 relative flex-[0_0_auto]">
                            <img
                                className="relative w-[30px] h-[30px]"
                                alt="Instagram"
                                src={instagram}
                            />

                            <img
                                className="relative w-[30px] h-[30px]"
                                alt="Whatsapp"
                                src={whatsapp}
                            />

                            <div className="relative w-[30px] h-[30px] bg-[url(/layer-1.png)] bg-[100%_100%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
