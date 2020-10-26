import Link from "next/link"
import { useState } from "react"
import { AppleIcon, DropdownIcon, LinuxIcon, WinIcon } from "./Icons"

export default function CTAButton() {
    const [isOpen, updateIsOpen] = useState(false)
    return (
        <>
            <div className="inline-flex">
                <div className="relative">
                    <div className="btn-popup inline-flex w-56 divide-x divide-green-600 hover:shadow-lg">
                        <Link href="https://www.kubernetic.com/">
                            <button className="btn btn-green inline-flex w-48 rounded-l py-3 pl-4 pr-3">
                                <AppleIcon />
                                <span>Download for Mac</span>
                            </button>
                        </Link>
                        <button
                            aria-label="choose-os"
                            className="btn btn-green inline-flex transition rounded-r ease-in-out duration-150 px-3 py-3"
                            onClick={() => updateIsOpen(!isOpen)}
                        >
                            <DropdownIcon />
                        </button>
                    </div>
                    {isOpen && <div>DropdownMenu</div>}
                </div>
            </div>
        </>
    )
}
