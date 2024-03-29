import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="navbar">
                <Link href="/" className="navbar__logo">
                    nextmap
                </Link>
                <div className="navbar__list">
                    <Link href="/stores" className="navbar__list--item">
                        맛집목록
                    </Link>
                    <Link href="/stores/new" className="navbar__list--item">
                        맛집등록
                    </Link>
                    <Link href="/users/likes" className="navbar__list--item">
                        찜한가게
                    </Link>
                    <Link href="/users/login" className="navbar__list--item">
                        로그인
                    </Link>
                </div>
                {/* mobile button */}
                <div
                    role="presentation"
                    className="navbar__button"
                    onClick={() => {
                        setIsOpen((val) => !val);
                    }}
                >
                    {isOpen ? <AiOutlineClose /> : <BiMenu />}
                </div>
            </div>
            {/* mobile navbar */}
            {isOpen && (
                <div className="navbar--mobile">
                    <div className="navbar__list--mobile">
                        <Link
                            href="/stores"
                            className="navbar__list--item--mobile"
                        >
                            맛집목록
                        </Link>
                        <Link
                            href="/stores/new"
                            className="navbar__list--item--mobile"
                        >
                            맛집등록
                        </Link>
                        <Link
                            href="/users/likes"
                            className="navbar__list--item--mobile"
                        >
                            찜한가게
                        </Link>
                        <Link
                            href="/users/login"
                            className="navbar__list--item--mobile"
                        >
                            로그인
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
