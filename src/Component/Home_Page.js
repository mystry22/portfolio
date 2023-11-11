import React from 'react';
import Menu from '../Shared/Menu';
import { FaHandPeace, FaLink, FaGithub } from 'react-icons/fa';

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
              <img src='/assets/image/me.png' style={{ width: '100%', height: '100%', borderRadius: 180 }} />

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

              <img src='/assets/image/html5.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/css.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/js.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/bootstrap.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/github.png' className='portfolio-stack' />

            </div>


          </div>

          <div className='row' style={{ marginTop: 30 }}>
            <div className='col-lg-3'>

              <img src='/assets/image/react.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/redux.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/flutter.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/aws.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/azure.png' className='portfolio-stack' />

            </div>


          </div>

          <div className='row' style={{ marginTop: 30 }}>
            <div className='col-lg-3'>

              <img src='/assets/image/nodejs.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/mongodb.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/sharepoint.png' className='portfolio-stack' />

            </div>

            <div className='col-lg-2'>

              <img src='/assets/image/teams.png' className='portfolio-stack' />

            </div>



            <div className='col-lg-2'>

              <img src='/assets/image/exchange.png' className='portfolio-stack' />

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

                  <p style={{ color: '#CCCCCC', fontSize: 14 }}>
                    Fancy finery is one of the top most growing brands in the fashion industry in Nigeria. <br />
                    Check out the latest selection of products wherewe we have something for everyone, so be sure to shop now and save a lot.
                  </p>

                  <p style={{ color: '#CCCCCC', fontSize: 14 }}>

                    <b>Teck Stack: </b> React, Mongodb, Express, NodeJS

                  </p>

                  <div className='row'>
                    <div className='col-lg-6 '>
                      <a href='https://fancyfineryhub.com.ng' className='manage_urls'><FaLink /> Live Preview</a>
                    </div>

                    <div className='col-lg-6 manage_urls' style={{ textAlign: 'right' }}>
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

                  <p style={{ color: '#CCCCCC', fontSize: 14 }}>
                    Wepaired is a social media application that helps with secured communication amongst members. <br />
                    This app makes it easy to stay in touch with loved ones, share your thoughts and experiences, and discover new and exciting things.
                  </p>

                  <p style={{ color: '#CCCCCC', fontSize: 14 }}>

                    <b>Teck Stack: </b> React Native, NodeJS, Redux, Mongodb

                  </p>

                  <div className='row'>
                    <div className='col-lg-6 '>
                      <a href='https://drive.google.com/file/d/1qkZE8qdgDisQ5Q5V90P2ujwBFnM4RlKU/view?usp=drive_link' className='manage_urls'><FaLink /> Download App</a>
                    </div>

                    <div className='col-lg-6 manage_urls' style={{ textAlign: 'right' }}>
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

                  <p style={{ color: '#CCCCCC', fontSize: 14 }}>
                    This is a clone of Africa's leading travel agency Wakanow's official booking application. <br />
                    Find the best deals on flights, hotels, and rental cars, all in one place. Book your next trip in minutes and start exploring!
                  </p>

                  <p style={{ color: '#CCCCCC', fontSize: 14 }}>

                    <b>Teck Stack: </b> Flutter, Dart, Provider

                  </p>

                  <div className='row'>
                    <div className='col-lg-6 '>
                      <a href='https://drive.google.com/file/d/1WSrRpNNopN1YyUcyXvOIDmDubM685tjJ/view?usp=sharing' className='manage_urls'><FaLink /> Download App</a>
                    </div>

                    <div className='col-lg-6 manage_urls' style={{ textAlign: 'right' }}>
                      <a href='https://github.com/mystry22/wakademo' className='manage_urls'><FaGithub /> View Code</a>
                    </div>

                  </div>
                </div>



              </div>

            </div>

          </div>
        </section>

      </div>

      <hr style={{ color: '#B026ff' }} />


      <div className='container'>

        <section id='Work Experience'>

          <h4 style={{ color: '#CCCCCC', fontWeight: 'bold', textAlign: 'center' }}>Work Experience</h4>

          <div className='col-lg-12'>
            <div className='eperience-image-holder'>

              <img src='/assets/image/tek.png' className='experience-image' />

            </div>

            <h4 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>React Native Engineer at Tek Experts</h4>
            <h6 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>March 2023 Till Date </h6>


            <ul style={{ color: '#CCCCCC' }}>
              <li>- Collaborate with other team members in designing user friendly screens.</li>
              <li>- Collaborate with the backend.</li>
              <li>- Code deployment to Codepush.</li>
              <li>- Building installable APK and iOS files.</li>
              <li>- Deployment of code to play store.</li>
              <li>- Troubleshooting app functionality issues.</li>
              <li>- Code repository maintenance and merging.</li>
            </ul>

            <h4 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>Tier 2 Technical Support Engineer</h4>

            <h6 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>January 2022 - March 2023</h6>


            <ul style={{ color: '#CCCCCC' }}>
              <li>- Determining problems and narrowing them down to a specific component while managing customers'expectation for resolution</li>
              <li>- Collaborating across team and leveraging on available resources to solve customers' issues.</li>
              <li>- Identifying if a customer's issue is caused by product limitation and if so, I make sure to file a bug report to the product team.</li>
              <li>- Educating customers on how best to manage the product, the best licenses and permission that suit their needs and how best to customize their products.</li>
              <li>- Handled over 1000 cases, with a closure rate of 90% and CSAT rate of 95%.</li>
              <li>- Handled the system administration of both Exchange and Teams Server for cloud based operations.</li>
              <li>- Performed incident escalation process in compliance with laid down policies and procedures.</li>
              <li>- Running Power shell commands for the purpose of troubleshooting nd deploying servers.</li>
              <li>- Ensure high customers satisfaction and excellent experience during the entire period of the case lifecycle.</li>
              <li>- Assist customers with installation, configuration and connectivity issues</li>

            </ul>

            <div className='eperience-image-holder'>

              <img src='/assets/image/wakanow.png' className='experience-image' />

            </div>

            <h4 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>Flutter Developer at Wakanow</h4>
            <h6 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>Jan 2021 - Dec 2021 (1 year) </h6>

            <ul style={{ color: '#CCCCCC' }}>
              <li>- Convert ui/ux designs to functional screens.</li>
              <li>- Collaborating across team and leveraging on available resources to solve customers' issues.</li>
              <li>- Modify existing designs to suit changes or modifications.</li>
              <li>- Collaborate with the backend Engineer by consuming endpoints.</li>
              <li>- Work with design team in ensuring designs are standard.</li>
              <li>- Carry out code deployment and documentation.</li>

            </ul>

            <div className='eperience-image-holder'>

              <img src='/assets/image/gtb.png' className='experience-image' />

            </div>

            <h4 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>Customer Service Representative at GT Bank</h4>
            <h6 style={{ color: '#CCCCCC', fontWeight: 'bold' }}>Jun 2017 - Oct 2019 (2 years 5 months) </h6>

            <ul style={{ color: '#CCCCCC' }}>
              <li>- Identify and assess customers’ needs and expectations regarding forex and offshore transfer services.</li>
              <li>- Provide accurate, valid, and complete information about exchange rates, fees, transaction limits, delivery methods, security measures, and other relevant details.</li>
              <li>- Assist with initializing, monitoring, and finalizing of offshore transfer's.</li>
              <li>- Provide key information's on forex policies updates and advice to customers.</li>
              <li>- Attend to internal and external communications through Email and Phone.</li>
              <li>- Process personal and business traveling allowance.</li>
              <li>- Follow up with internal control on approvals and reports to CBN.</li>
              <li>- Process International money operator payment and reporting.</li>

            </ul>
          </div>


        </section>

      </div>


    </div>


  )
}
