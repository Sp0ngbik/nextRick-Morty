import {API} from "assets/api/api";
import {CharacterType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import dynamic from "next/dynamic";

const CharacterCard = dynamic(() => import('components/Card/CharacterCard/CharacterCard')
    .then(module => module.CharacterCard), {ssr: false})

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()
    return {
        props: {
            characters
        },
        // revalidate: 30
    }
}

type PropsType = {
    characters: ResponseType<CharacterType>
}

const Characters = (props: PropsType) => {

    const {characters} = props
    const charactersList = characters.results.map(char =>
        (<CharacterCard key={char.id} character={char}/>))
    return (
        <PageWrapper>
            {charactersList}
        </PageWrapper>
    );
};
Characters.getLayout = getLayout

export default Characters;