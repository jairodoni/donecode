import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import config from '../../slicemachine.config.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'aboutme',
    path: '/',
  },
  {
    type: 'aplicativos',
    path: '/',
  },
  {
    type: 'websites',
    path: '/',
  },
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    accessToken: process.env.PRYSMIC_ACCESS_TOKEN,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { revalidate: 60 * 60 * 12 } }
        : { next: { revalidate: 5 } },
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}
