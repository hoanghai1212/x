import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

type IBlogUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: [
      {
        params: { slug: `vibrating` },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
}) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};

const htmlString = `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heart animation</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
    <div class="heart" />
  </body>
</html>`;

const cssString = `body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;
  background: #262626;
}

.heart {
  width: 100px;
  height: 100px;
  background: red;
  transform: rotate(-45deg);
  box-shadow: -10px 10px 120px red;
  animation: heart 0.6s linear infinite;
}

@keyframes heart {
  0% {
      transform: rotate(-45deg) scale(1.07);
  }
  100% {
      transform: rotate(-45deg) scale(1.0);
  }
  100% {
      transform: rotate(-45deg) scale(0.8);
  }
  
}

.heart::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background: red;
  top: -50%;
  border-radius: 60px;
  box-shadow: -10px 10px 120px red;
}

.heart::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  background: red;
  right: -50%;
  border-radius: 60px;
  box-shadow: -10px 10px 120px red;
}`;

const Heart = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main
      meta={<Meta title={props.slug} description="Lorem ipsum" />}
      htmlString={htmlString}
      cssString={cssString}
    >
      <div className="h-[100px] w-[100px] -rotate-45 animate-[heartVibrating_0.3s_linear_infinite] bg-[red] shadow-[-10px_10px_120px_red] before:absolute before:-top-1/2 before:h-[100px] before:w-[100px] before:rounded-[60px] before:bg-[red] before:shadow-[-10px_10px_120px_red] after:absolute after:-right-1/2 after:h-[100px] after:w-[100px] after:rounded-[60px] after:bg-[red] after:shadow-[-10px_10px_120px_red]" />
    </Main>
  );
};

export default Heart;
