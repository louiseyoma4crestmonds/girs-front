import Head from "next/head";

type TitleProps = {
  title: string;
};
function PageTitle(props: TitleProps): JSX.Element {
  const { title } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="crest learn applictaion" />
    </Head>
  );
}

export default PageTitle;
