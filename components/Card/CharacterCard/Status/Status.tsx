import Image, {StaticImageData} from "next/image";
import aliveStatus from "public/statuses/alive.png";
import {CharacterStatusType} from "assets/api/rick-and-morty-api";

type StatusProps = {
    status: CharacterStatusType
    src: StaticImageData
}

export const Status = (props: StatusProps) => {
    const {status, src} = props
    return (
        <>
            <Image src={src}  alt={''} width={15} height={15}/>
            <span>{status}</span>
        </>
    );
};

