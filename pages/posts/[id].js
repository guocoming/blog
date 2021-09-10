import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { getPostIds, getPostData } from '../../lib/posts'

/**
 * 获取所有可能的 params.id 列表
 * @returns 
 */
export async function getStaticPaths() {
  const paths = getPostIds()
  return {
    paths,
    fallback: false
  }
}

/**
 * 获取数据，id 必须是 getStaticPaths 中获取到的
 * @param {string} param0 id
 * @returns 
 */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
)

export default Post
