import React from "react";
import Head from "next/head";

const SharedHead = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx="true" global="true">{`
        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
          font-family: "Lato", sans-serif;
        }
      `}</style>
    </>
  );
};

export default SharedHead;
