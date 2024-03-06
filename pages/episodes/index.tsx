import {API} from "../../assets/api/api";
import {CharacterType, EpisodeType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Header} from "../../components/Header/Header";
import {Card} from "../../components/Card/Card";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes()
    if (!episodes) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            episodes
        },
    }
}

type PropsType = {
    episodes: ResponseType<EpisodeType>
}

const Episodes = (props: PropsType) => {
    const {episodes} = props
    const episodesList = episodes.results.map(episode => (<Card name={episode.name} key={episode.id}/>))
    return (
        <PageWrapper>
            <Header/>
            {episodesList}
        </PageWrapper>
    );
};

export default Episodes;