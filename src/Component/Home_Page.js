import React from 'react';
import Menu from '../Shared/Menu';
import { FaHandPeace,FaLink,FaGithub } from 'react-icons/fa';

export default function Home_Page() {
  return (
    <div className='defaultStyle'>
      <Menu />

      <div className='container'>
        <div className='row' style={{ marginTop: '8rem' }}>
          <div className='col-lg-6'>
            <div className='intro'>
              <h2 style={{ color: '#CCCCCC', fontWeight: 'bold', }}>
                Hi <FaHandPeace color='#FFE14C' /> <br />
                My name is <br />
                <span style={{ color: '#FFE14C' }}>Ebuka Alaneme</span> <br />
                I am a Software Developer & <br />
                A Microsoft Office 365 <br />
                Technical Support Engineer
              </h2>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='imageHolder'>
              <img src='/assets/image/me.jpg' style={{ width: '100%', height: '100%', borderRadius: 180 }} />

            </div>
          </div>

        </div>
      </div>

      <hr style={{ color: '#B026ff' }} />

      <div className='container'>

        <section id='About' className='spacing'>
          <h4 style={{ color: '#CCCCCC', fontWeight: 'bold', textAlign: 'center' }}>About</h4>

          <p style={{ color: '#CCCCCC', fontSize: 14 }}>
            I’m a Technical Support Engineer and a Software Developer with over 3 years of experience in creating good customer experience and also building web and mobile applications. I have passion for solving complex problems and delivering high-quality products that meet the needs and expectations of my clients.

            I have supported products like Microsoft365 Exchange Online, SharePoint Online and Teams. <br />

            Some of the skills and technologies that I use are: <br />

            Front-end: HTML, CSS, JavaScript, React, Bootstrap <br />
            Back-end: Node.js, Express, MongoDB, RESTful APIs <br />
            Mobile: React Native, Flutter <br />
            Others: Git, GitHub, Postman, Heroku, AWS, Azure <br />

          </p>

          <p style={{ color: '#CCCCCC', fontSize: 14 }}>

            I’m always eager to learn new things and explore new challenges. I enjoy working in a team as well as independently. I value communication, collaboration, and feedback.

            Some of the projects that I have worked on are: <br />

            <b>Wepaired:</b> A simple yet powerful app that helps users connect and manage communication as it provides text messaging and video conferencing abilities. <br />
            <b>Molenu:</b> A dynamic and responsive e-commerce website that allows users make fashion purchases online with payment gateway integrated. The website is built with React and Node.js. <br />
            <b>Wakademo:</b> A user-friendly and interactive app used for making reservation for local and international flights. This was built using Flutter and NodeJS and it's a clone for the original wakanow booking App. <br />
            You can find more details about my projects and skills on my [portfolio] and [GitHub] <b>https://github.com/mystry22</b>. You can also contact me via <b>alanemehenry6@gmail.com</b>.
          </p>

        </section>
      </div>

      <hr style={{ color: '#B026ff' }} />


      <div className='container' >
        <section id='Tech Stack' className='spacing' style={{ textAlign: 'center' }}>

          <h4 style={{ color: '#CCCCCC', fontWeight: 'bold', textAlign: 'center' }}>Tech Stacks</h4>

          <h6 style={{ color: '#CCCCCC', fontWeight: '', textAlign: 'center', marginBottom: 10 }}>Technologies I’ve been working with recently</h6>

          <div className='row'>
            <div className='col-lg-3'>

              <img src='/assets/image/html5.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/css.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/js.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/bootstrap.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/github.png' style={{ width: '60%', height: '80%' }} />

            </div>


          </div>

          <div className='row' style={{ marginTop: 30 }}>
            <div className='col-lg-3'>

              <img src='/assets/image/react.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/redux.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/flutter.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/aws.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/azure.png' style={{ width: '60%', height: '80%' }} />

            </div>


          </div>

          <div className='row' style={{ marginTop: 30 }}>
            <div className='col-lg-3'>

              <img src='/assets/image/nodejs.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/mongodb.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/sharepoint.png' style={{ width: '60%', height: '80%' }} />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/teams.png' style={{ width: '60%', height: '80%' }} />

            </div>



            <div className='col-lg-2'>

              <img src='/assets/image/exchange.png' style={{ width: '60%', height: '80%' }} />

            </div>


          </div>
        </section>
      </div>

      <hr style={{ color: '#B026ff' }} />

      <div className='container'>


        <section id='Projects' className='spacing'>


          <h4 style={{ color: '#CCCCCC', fontWeight: 'bold', textAlign: 'center' }}>Projects</h4>

          <h6 style={{ color: '#CCCCCC', fontWeight: '', textAlign: 'center', marginBottom: 30 }}>These are some of my recent projects lately</h6>

          <div className='row'>

            <div className='col-lg-4'>
              <div className='project-card'>
                <div className='project-img'>

                  <img src='/assets/image/e-commerce.png' style={{
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    width: '100%',
                    height: '100%'
                  }} />
                </div>
                <div className='project-text-area'>

                  <h4 style={{ color: '#CCCCCC', textAlign: 'center', }}>Fancy Finery E-commerce</h4>

                  <p style={{ color: '#CCCCCC', fontSize:14 }}>
                    Fancy finery is one of the top most growing brands in the fashion industry in Nigeria. <br />
                    Check out the latest selection of products wherewe we have something for everyone, so be sure to shop now and save a lot.
                  </p>

                  <p style={{ color: '#CCCCCC', fontSize:14  }}>

                    <b>Teck Stack: </b> React, Mongodb, Express, NodeJS

                  </p>

                  <div className='row'>
                    <div className='col-lg-6 '>
                      <a href='https://fancyfineryhub.com.ng' className='manage_urls'><FaLink /> Live Preview</a>
                    </div>

                    <div className='col-lg-6 manage_urls' style={{textAlign:'right'}}>
                      <a href='https://github.com/mystry22/molenu' className='manage_urls'><FaGithub /> View Code</a>
                    </div>

                  </div>
                </div>



              </div>

            </div>

            <div className='col-lg-4'>
              <div className='project-card'>
                <div className='project-img'>

                  <img src='/assets/image/wepaired.png' style={{
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    width: '100%',
                    height: '100%'
                  }} />
                </div>
                <div className='project-text-area'>

                  <h4 style={{ color: '#CCCCCC', textAlign: 'center', }}>Wepaired App</h4>

                  <p style={{ color: '#CCCCCC', fontSize:14 }}>
                    Wepaired is a social media application that helps with secured communication amongst members. <br />
                    This app makes it easy to stay in touch with loved ones, share your thoughts and experiences, and discover new and exciting things.
                  </p>

                  <p style={{ color: '#CCCCCC', fontSize:14  }}>

                    <b>Teck Stack: </b> React Native, NodeJS, Redux, Mongodb

                  </p>

                  <div className='row'>
                    <div className='col-lg-6 '>
                      <a href='https://drive.google.com/file/d/1qkZE8qdgDisQ5Q5V90P2ujwBFnM4RlKU/view?usp=drive_link' className='manage_urls'><FaLink /> Download App</a>
                    </div>

                    <div className='col-lg-6 manage_urls' style={{textAlign:'right'}}>
                      <a href='https://github.com/mystry22/Wepairedapp' className='manage_urls'><FaGithub /> View Code</a>
                    </div>

                  </div>
                </div>



              </div>

            </div>

            <div className='col-lg-4'>
              <div className='project-card'>
                <div className='project-img'>

                  <img src='/assets/image/wakademo.png' style={{
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    width: '100%',
                    height: '100%'
                  }} />
                </div>
                <div className='project-text-area'>

                  <h4 style={{ color: '#CCCCCC', textAlign: 'center', }}>Wakanow Demo App</h4>

                  <p style={{ color: '#CCCCCC', fontSize:14 }}>
                    This is a clone of Africa's leading travel agency Wakanow's official booking application. <br />
                    Find the best deals on flights, hotels, and rental cars, all in one place. Book your next trip in minutes and start exploring!
                  </p>

                  <p style={{ color: '#CCCCCC', fontSize:14  }}>

                    <b>Teck Stack: </b> Flutter, Dart, Provider

                  </p>

                  <div className='row'>
                    <div className='col-lg-6 '>
                      <a href='https://drive.google.com/file/d/1WSrRpNNopN1YyUcyXvOIDmDubM685tjJ/view?usp=sharing' className='manage_urls'><FaLink /> Download App</a>
                    </div>

                    <div className='col-lg-6 manage_urls' style={{textAlign:'right'}}>
                      <a href='https://github.com/mystry22/wakademo' className='manage_urls'><FaGithub /> View Code</a>
                    </div>

                  </div>
                </div>



              </div>

            </div>

          </div>
        </section>

      </div>


    </div>


  )
}
