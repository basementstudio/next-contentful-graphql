import Hello from 'components/hello'
import PreviewButtons from 'components/preview-buttons'
import cms from 'lib/cms'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

const HomePage = ({
  page,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(page)
  return (
    <>
      <Hello who="Typescript" />
      {preview && <PreviewButtons />}
    </>
  )
}

const getStaticProps = async ({ preview }: GetStaticPropsContext) => {
  const home = await cms(preview).HomePage()

  return {
    props: {
      page: home ?? null,
      preview: !!preview
    },
    revalidate: 1
  }
}

export default HomePage
export { getStaticProps }
