import Header from './Navbar';
import Footer from './Footer';
import Feature from './Home/Feature';
import Service from './Home/Service';
import Product from './Home/Product';
import News from './Home/News';
import { useState } from 'react';

const Home = () => {
  let [news, setNews] = useState(
    [
      {
        title: 'Investment Update, Successful people ask better questions',
        author: 'Alexander Samokhin',
        date: 'July 21, 2018',
        img: 'img/news/blog_post_1.png',
        branch: 'Finance',
      },
      {
        title: 'Investment Update, Successful people ask better questions',
        author: 'Alexander Samokhin',
        date: 'July 21, 2018',
        img: 'img/news/blog_post_2.jpg',
        branch: 'Stock',
      },
      {
        title: 'Investment Update, Successful people ask better questions',
        author: 'Alexander Samokhin',
        date: 'July 21, 2018',
        img: 'img/news/blog_post_3.jpg',
        branch: 'Obligations',
      },
    ]);

  return ( 
    <div className="wrapper">
      <Header />
      <main className="content">
        <section className="home">
          <div className="home__body">
            <h2 className="home__title title-l">
              The best IT service for your security
            </h2>
            <p className="home__text text-main">
              Hub IT allows your business and technology computers to store and
              manipulate big data in the digital world.
            </p>
            <a href="#" className="btn">
              Discover hub
            </a>
            <a href="#" className="home__phone">
              Hotline: (733)865-5485
            </a>
          </div>
        </section>
        <section className="features">
          <div className="features__body">
            <div className="features__list">
              <Feature img={'img/icons/icon-feat_1.png'} title={'Random text'} body={'Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world.'} />
              <Feature img={'img/icons/icon-feat_2.png'} title={'Core WordPress'} body={'Hub IT allows your business and technology computers to store, analyze, and manipulate big data in the digital world.'} />
              <Feature img={'img/icons/icon-feat_1.png'} title={'Also there'} body={'Another length of the text to test how it works'} />
            </div>
          </div>
        </section>
        <section className="vision">
          <div className="vision__body">
            <div className="vision__image">
              <div className="vision__img vision__img_1">
                <span>
                  45+ <br /> Years Of Experience
                </span>
                <img src="img/vision/left-top.png" alt="" />
              </div>
              <div className="vision__img vision__img_2">
                <img src="img/vision/vision-l.png" alt="" />
              </div>
              <div className="vision__img vision__img_3">
                <img src="img/vision/left-bottom.png" alt="" />
              </div>
              <div className="vision__img vision__img_4">
                <img src="img/vision/vision-s.png" alt="" />
              </div>
            </div>
            <div className="vision__info">
              <h5 className="vision__subtitle">Company’s vision</h5>
              <h3 className="title-m">IT solutions foryour business.</h3>
              <p className="vision__text text-main">
                Hub IT allows your business and technology computers to store,
                transmit, analyze, and manipulate big data in the digital world.
              </p>
              <a href="" className="vision__btn btn">
                Read More
              </a>
            </div>
          </div>
        </section>
        <section className="service">
          <div className="service__body">
            <h3 className="service__title title-m">
              IT solutions foryour business.
            </h3>
            <p className="service__subtitle text-main">
              Hub IT allows your business and technology computers to store,
              transmit, analyze,and manipulate big data in the digital world.
            </p>
            <div className="service__list">
              <Service img={'img/service/service_1.png'} title={'IT Security'} body={'Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.'} />
              <Service img={'img/service/service_2.png'} title={'Mobile Data'} body={'Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.'} />
              <Service img={'img/service/service_1.png'} title={'For Companies'} body={'Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.'} />
            </div>
          </div>
        </section>
        <section className="background">
          <img src="img/bg/bg.png" alt="" />
        </section>
        <section className="product">
          <div className="product__body">
            <h2 className="product__title title-l">Why our product is different</h2>
            <div className="product__list">
              <Product img={'img/icons/icon-prod_1.png'} title={'Solve Problems Real Time'} body={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} />
              <Product img={'img/icons/icon-prod_2.png'} title={'Secured & Safe Payments'} body={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} />
              <Product img={'img/icons/icon-prod_3.png'} title={'24/7 Customers Support'} body={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'} />
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials__body">
            <div className="testimonials__img">
              <img src="img/testimonials/testimonial.png" alt="" />
            </div>
            <div className="testimonials__info">
              <h3 className="testimonials__title title-m">Satisfied Customers</h3>
              <p className="testimonials__text">
                Every detail has been taken care these team are realy amazing and
                talented! They can help me with fast and accurate solutions to all
                kinds of issues. Love it! Five stars for them.
              </p>
              <p className="testimonials__author">Joeby Ragpa</p>
              <p className="testimonials__role">Associate</p>
            </div>
          </div>
        </section>
        <section className="news">
          <div className="news__body">
            <div className="news__title title-m">Latest News</div>
            <div className="news__list">
              <News newsItem={news[0]} news={news} setNews={setNews} />
              <News newsItem={news[1]} news={news} setNews={setNews} />
              <News newsItem={news[2]} news={news} setNews={setNews} />
            </div>
          </div>
        </section>
        <section className="get-started">
          <div className="get-started__body">
            <h2 className="get-started__title title-m">
              Ready to get started? Get your Finance out of the way
            </h2>
            <p className="get-started__text text-main">
              {" "}
              If you deliver enough value, making money becomes the easy part. Why
              should you be stressful? Let us make this easier for you.
            </p>
            <a href="#" className="get-started__btn btn">
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
   );
}
 
export default Home;