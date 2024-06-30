import { ReactNode } from "react";
import { IconBaseProps } from "react-icons";
import { DiUnitySmall } from "react-icons/di";
import { FaHome, FaLocationArrow } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";

export function getIconByName(name: string, key: number, props?: IconBaseProps) : ReactNode
{
    switch (name) {
        case 'home':
            return <FaHome {...props} key={key} />;
        case 'locationArrow':
            return <FaLocationArrow {...props} key={key} />;

        case 'unity':
            return <DiUnitySmall {...props} key={key} />
        case 'c#':
            return <SiCsharp {...props} key={key} />

        default:
            return null;
    }
}