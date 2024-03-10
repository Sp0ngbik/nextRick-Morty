import Image, {StaticImageData} from "next/image";
import {CharacterStatusType} from "assets/api/rick-and-morty-api";
import styled from "styled-components";

type StatusProps = {
    status: CharacterStatusType
    src: StaticImageData
}

export const Status = (props: StatusProps) => {
    const {status, src} = props
    return (
        <StatusWrapper>
            <Image src={src}  alt={''} width={15} height={15}/>
            <span>{status}</span>
        </StatusWrapper>
    );
};

const StatusWrapper = styled.div `
    display: flex;
    align-items: center;

    & span {
        margin: 5px;
    }
`
