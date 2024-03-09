import {getLayout} from "components/Layout/BaseLayout/BaseLayout";
import {PageWrapper} from "components/PageWrapper/PageWrapper";
import * as path from "path";
import fs from 'fs/promises'

export const getStaticProps = async () => {
    const getParsedData = async (): Promise<{ title: string }> => {
        const filePath = path.join(process.cwd(), 'public', 'staticData.json')

        try {
            const jsonData = await fs.readFile(filePath)
            return JSON.parse(jsonData.toString())
        } catch (e) {
            return {title: 'no title'}
        }
    }
    const {title} = await getParsedData()

    return {
        props: {
            title
        },
    }
}

type PropsType = {
    title: string
}

const Test = (props: PropsType) => {
    const {title} = props

    return (
        <PageWrapper>
            {title}
        </PageWrapper>
    );
};
Test.getLayout = getLayout

export default Test;