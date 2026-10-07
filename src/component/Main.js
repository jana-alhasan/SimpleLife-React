import React from 'react'
import Headerleft from './Headerleft'
import './Main.css'
import Image from './Image'
import Date from './Date'
import Continue from './Continue'
import Artical from './Artical'
import PostName from './PostName'
import WidgetTitle from './WidgetTitle'
import Widgetbody from './Widgetbody'

const Main = () => {
  return (
    <div className="container container-flex">
      <main role="main">
        <article className="article-featured">
          <br />
          <Date />
          <br />
          <Headerleft />
          <br />
          <Image />
          <Artical />
          <br />
          <Continue />
        </article>

        <article className="article-recent">
          <div className="article-recent-main">
            <Headerleft />
            <Artical />
            <Continue />
          </div>
          <div className="article-recent-secondary">
            <img src="img/food.jpg" alt="two dumplings on a wood plate with chopsticks" className="article-image" />
            <br />
            <Date />
          </div>
        </article>
        <br /><br />

        <article className="article-recent">
          <div className="article-recent-main">
            <Headerleft />
            <Artical />
            <Continue />
          </div>
          <div className="article-recent-secondary">
            <img src="img/work.jpg" alt="a chair at a white desk against a white wall" className="article-image" />
            <br />
            <Date />
          </div>
        </article>
        <br /><br />

        <article className="article-recent">
          <div className="article-recent-main">
            <Headerleft />
            <Artical />
            <Continue />
          </div>
          <div className="article-recent-secondary">
            <img src="img/deco.jpg" alt="a green plant in a clear round vase" className="article-image" />
            <br />
            <Date />
          </div>
        </article>
        <br /><br />
      </main>

      <aside className="sidebar">
        <div className="sidebar-widget">
          <WidgetTitle />
          <img src="img/about-me.jpg" alt="About the blog author" className="widget-image" />
          <Widgetbody />
        </div>
        <div className="sidebar-widget">
          <WidgetTitle />
          <div className="widget-recent-post">
            <PostName />
            <img src="img/food.jpg" alt="two dumplings on a wood plate with chopsticks" className="widget-image" />
          </div>
          <div className="widget-recent-post">
            <PostName />
            <img src="img/work.jpg" alt="a chair at a white desk against a white wall" className="widget-image" />
          </div>
          <div className="widget-recent-post">
            <PostName />
            <img src="img/deco.jpg" alt="a green plant in a clear round vase" className="widget-image" />
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Main
