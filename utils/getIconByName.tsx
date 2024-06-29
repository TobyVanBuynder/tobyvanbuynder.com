import { ReactNode } from "react";
import { FaHome, FaLocationArrow } from "react-icons/fa";

export function getIconByName(name: string) : ReactNode
{
    switch (name) {
        case 'home':
            return <FaHome />;
        case 'locationArrow':
            return <FaLocationArrow />;
        default:
            return null;
    }
}