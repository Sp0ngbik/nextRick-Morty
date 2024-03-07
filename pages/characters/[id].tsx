import {API} from "../../assets/api/api";
import {CharacterType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {getLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";
import styled from "styled-components";
import characters from "./index";

export const getStaticPaths: GetStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters()

    const paths = results.map((el => ({params: {id: el.id.toString()}})))

    return {
        paths,
        fallback: true
    }

}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}
    const character = await API.rickAndMorty.getCharacter(id as string)
    if (!character) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            character
        },
    }
}

type PropsType = {
    character: CharacterType
}

const Character = (props: PropsType) => {
    const {character} = props

    const router = useRouter()
    if (router.isFallback) return <h1>Loading...</h1>

    const characterId = router.query.id

    const goToCharacters = ()=>{
        return router.push('/characters')
    }

    return (
        <PageWrapper>
            <IdText>ID: {characterId}</IdText>
            <CharacterCard key={character.id} character={character}/>
            <button onClick={goToCharacters}>GO TO CHARACTERS</button>
        </PageWrapper>
    );
};
Character.getLayout = getLayout

export default Character;

const IdText = styled.div`
    font-size: 38px;
    display: block;
`