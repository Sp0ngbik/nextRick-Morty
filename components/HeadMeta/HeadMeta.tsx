import Head from "next/head";

type PropsType = {
  title?: string;
};

export const HeadMeta = (props: PropsType) => {
  const { title } = props;

  const description = title
    ? `Rick and Morty ${title.toLowerCase()}`
    : "Rick and Morty";

  return (
    <Head>
      <title>{title ?? "Rick and Morty"}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};
