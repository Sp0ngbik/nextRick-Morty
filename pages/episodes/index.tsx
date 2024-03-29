import {API} from "assets/api/api";
import {EpisodeType, ResponseType} from "assets/api/rick-and-morty-api";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import {Card} from "components/Card/Card";
import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async ({res}) => {
    res.setHeader('Cache-control', 'public , s-maxage=10, stale-while-validate=100')

    const episodes = await API.rickAndMorty.getEpisodes()

    const isAuth = false

    if (!episodes) {
        return {
            notFound: true
        }
    }

    if (!isAuth) {
        return {
            redirect: {
                destination: '/characters',
                permanent: false
            }
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
            {episodesList}
        </PageWrapper>
    );
};
Episodes.getLayout = getLayout

export default Episodes;