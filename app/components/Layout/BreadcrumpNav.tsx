"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBackward, faBackwardStep } from "@fortawesome/free-solid-svg-icons";

export const BreadcrumpNav = () => {
    const pathname = usePathname();
    const router = useRouter();
    
    const segments = pathname.split("/").filter(Boolean);

    const handleBackClick = () => {
        router.back();
    }

    return (
        <nav aria-label="Breadcrumb" className="ml-2 flex gap-2 justify-start w-full">
            {
               pathname !== "/" 
               ? <button className=" w-fit hover:underline" onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
               </button> 
               : ""
            }
            <ol className="flex gap-2">
                <li>
                    <Link href="/">Home</Link>
                </li>
                {segments.map((segment, index) => {
                    const href = `/${segments.slice(0, index + 1).join("/")}`;
                    const label = decodeURIComponent(segment)
                        .replace(/[_-]+/g, " ")
                        .replace(/\b\w/g, (letter) => letter.toUpperCase());

                    return (
                        <li key={href} className="flex gap-2">
                            <span aria-hidden="true">/</span>
                            {index === segments.length - 1 ? (
                                <span aria-current="page">{label}</span>
                            ) : (
                                <Link href={href}>{label}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
               
         
        </nav>
        
    );
};