// import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();

// let homepath = '/home';


// console.log(publicRuntimeConfig);
// if (publicRuntimeConfig.ENV !== 'local') {
//   homepath = `${publicRuntimeConfig.EXTRA_PATH}${homepath}`;
// }

// const Index = () => {};
// Index.getInitialProps = async ctx => {
//  // console.log(ctx.res);
//   ctx.res.writeHead(302, { Location: homepath });
//   ctx.res.end();
// };

// export default Index;

import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      <Link href={'/cocktail'} >Cocktail</Link>
    </div>
  )
}

export default index