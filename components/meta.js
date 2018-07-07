import Head from 'next/head';
import stylesheet from '../styles/style.styl';
import slug from 'speakingurl';

export default ({ show, baseURL }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      {show.url ?
       [
        <meta key="og:audio" property="og:audio" content={show.url} />,
        <meta key="og:audio:secure_url" property="og:audio:secure_url" content={show.url} />,
        <meta key="og:audio:type" property="og:audio:type" content="audio/mp3" />,
        <meta key="og:type" property="og:type" content="music.song" />,
        <meta key="og:url" property="og:url" content={`${baseURL}/show/${show.displayNumber}/${slug(show.title)}`} />
       ].map(x => x)
        :
       [
         <meta key="og:type" property="og:type" content="website" />,
         <meta key="og:url" property="og:url" content={baseURL+show.title.toLowerCase()} />
       ].map(x => x)

      }
      <meta property="og:title" content={`${show.title} — Syntax Podcast ${show.displayNumber}`} />
      <meta
        property="og:description"
        content="Full Stack Developers Wes Bos and Scott Tolinski dive deep into web development topics, explaining how they work and talking about their own experiences. They cover from JavaScript frameworks like React, to the latest advancements in CSS to simplifying web tooling."
      />
      <meta property="og:image" content={`${baseURL}/static/syntax-banner.png`} />
      <link rel="shortcut icon" href={`${baseURL}/static/favicon.png`} />
      <title>
        {show.title} — Syntax Podcast {show.displayNumber}
      </title>
      <style dangerouslySetInnerHTML={{ __html: stylesheet.replace(/\n/g, '') }} />
    </Head>
  </div>
);
