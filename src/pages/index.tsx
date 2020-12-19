import Hello from 'components/hello'
import PreviewButtons from 'components/preview-buttons'
import cms from 'lib/cms'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

const HomePage = ({
  assets,
  preview
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(assets)
  return (
    <>
      <Hello who="Typescript" />
      {preview && <PreviewButtons />}
    </>
  )
}

const getStaticProps = async ({ preview }: GetStaticPropsContext) => {
  const assets = await cms(preview).Test({ preview: !!preview })

  return {
    props: {
      assets: assets ?? null,
      preview: !!preview
    },
    revalidate: 1
  }
}

export default HomePage
export { getStaticProps }
