import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
 
export const getStaticProps = (async (context) => {
  // ...
}) satisfies GetStaticProps
 
export const getStaticPaths = (async () => {
  // ...
}) satisfies GetStaticPaths
 
export const getServerSideProps = (async (context) => {
  // ...
}) satisfies GetServerSideProps