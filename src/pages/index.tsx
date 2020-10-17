import Hello from 'components/hello'
import gqlSdk from 'lib/cms'
import { InferGetStaticPropsType } from 'next'

const HomePage = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(page)
  return <Hello who="Typescript" />
}

const getStaticProps = async () => {
  const home = await gqlSdk.HomePage()

  return {
    props: {
      page: home ?? null
    },
    revalidate: 1
  }
}

export default HomePage
export { getStaticProps }
