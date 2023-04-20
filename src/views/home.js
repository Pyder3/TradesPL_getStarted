import React from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>TradesPL Email-based Trade Journaling!</title>
        <meta property="og:title" content="TradesPL Email-based Trade Journaling!</" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="home-max-width max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="home-image"
            />
            <span>
              <span className="home-text001">
                TradesPL, Email-based Trade Journaling System
              </span>
              <br></br>
            </span>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle">
              <span className="home-text003">
                TradesPL. 
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="home-text004"></br>
              <br className="home-text005"></br>
              <span className="home-text006">
                The easiest way to maintain a record of all your trades.
              </span>
              <br className="home-text007"></br>
              <span className="home-text008">Free First Year of Service. After that $5 per month.</span>
              <br></br>
            </span>
            <span className="home-description">
              <span className="home-text010">Step 1:</span>
              <span className="home-text011"> </span>
              <span>
                {' '}
                Email your trade confirmation message to service@tradespl.com
              </span>
              <br></br>
              <br></br>
              <span className="home-text015">Step 2:</span>
              <span className="home-text016">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                Receive a private and exclusive url to your own personal spreadsheet hosted on Google cloud
                within sixty seconds with your trade journal entry!
              </span>
              <br></br>
            </span>
            <div className="home-container01">
              <button
                type="button"
                className="home-button button button-gradient"
              >
                Get started
              </button>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1623697899804-7b38dfbd8423?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxzaGVldHxlbnwwfHx8fDE2NzkzNjYwNzg&amp;ixlib=rb-4.0.3&amp;w=500"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/playground_assets/union-400h.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section section-container">
        <div className="home-max-width2 max-width">
          <div className="home-content1">
            <span className="home-text019 beforeHeading">how it works</span>
            <h1 className="home-text020">
              When a trade is executed, a confirmation is received.  The trade
              is simply forwarded to TradesPL service by email.  The TradesPL
              software extracts the trade type (see list below) and pushes them
              to a private spreadsheet hosted on the google cloud.  The url to
              this spreadsheet is emailed back to the sender.  All typically
              within 60 seconds.
            </h1>
            <span className="home-text021">
              <span>
                The spreadsheet is confidential and are associated with the
                email id used to send the trade message.  For extra
                confidentiality, you may create a different email id on gmail,
                outlook, or any other platform to interact with the TradesPL
                service.  Only the person with the long url can access the
                sheet, and this url is sent only to your inbox.
              </span>
              <br></br>
            </span>
            <div className="home-container02">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1536300099515-6c61b290b654?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM4fHxsYXB0b3B8ZW58MHx8fHwxNjc5MzcxMjM4&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-hero-image1"
            />
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1468971050039-be99497410af?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx0cmFkaW5nfGVufDB8fHx8MTY3OTM3MjgzOA&amp;ixlib=rb-4.0.3&amp;w=1200"
              className="home-hero-image2"
            />
          </div>
          <div className="home-content2">
            <span className="home-text024 beforeHeading">get started</span>
            <h1 className="home-text025">Trade Types Recorded.</h1>
            <div className="home-step"></div>
            <div className="home-step1">
              <div className="home-container03">
                <span className="home-title">
                  <span className="home-text026">
                    * Stocks, Bonds
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text027"></br>
                  <span className="home-text028">* Future, Commodities</span>
                  <br className="home-text029"></br>
                  <span className="home-text030">* Naked Calls and Puts</span>
                  <br className="home-text031"></br>
                  <span className="home-text032">
                    * Long and Short Verticals
                  </span>
                  <br className="home-text033"></br>
                  <span className="home-text034">* Balanced Butterfly</span>
                  <br className="home-text035"></br>
                  <span className="home-text036">* Unbalanced Butterfly</span>
                  <br className="home-text037"></br>
                  <span className="home-text038">* ~Butterfly</span>
                  <br className="home-text039"></br>
                  <span className="home-text040">* Ratio Spreads</span>
                  <br className="home-text041"></br>
                  <span className="home-text042">* Iron Condors</span>
                  <br className="home-text043"></br>
                  <span className="home-text044">* Straddles</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width4 max-width">
          <span className="home-text046 beforeHeading">get started</span>
          <h1 className="home-heading">
            <span>No matter what you do,</span>
            <span>TradesPL will help organize your trades.</span>
          </h1>
          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name"></Card>
            <Card text="Personal" rootClassName="card-root-class-name2"></Card>
            <Card text="Family" rootClassName="card-root-class-name1"></Card>
          </div>
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-max-width5 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text049 beforeHeading">faq</span>
              <h1 className="home-text050">
                <span className="home-text051">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text053">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text054">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text055">
                    Trade Journaling service is free. No credit card required,
	            no registration. After one year of service, $5 per month.
	  	    Cancel anytime for no billing starting 1st of next month.
	            However, the spreadsheet will be removed if there is no trade entry for three months.  
	   	    Future analytic  services will not be free.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text056">
                    Are there other paid services available?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text057">
                    Data analytics services based on AI will be launched soon.  Traders and customers
	  	    can sign up for those as they are announced.  The cost of these services will be 
	  	    competitive and very affordable.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text058">
                    Is this a globally available service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text059">
	  	    Indeed! If you trade on any exchange in the world, just start using 
	            the email-based Trade journaling system.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text060">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text061">
	  	    You can use google sheet IOS and Android app to monitor the updates to the trade journals
	            in real-time..   
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group%202-1200w.png"
              className="home-image5"
            />
          </div>
          <div className="home-banner">
            <span className="home-text062 beforeHeading">get started</span>
            <h1 className="home-text063">
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <div className="home-btns">
              <button className="home-button2 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container04">
            <div className="footer-column">
              <span className="home-text069">Product</span>
              <span className="home-text070">How it works</span>
              <span className="home-text071">Features</span>
              <span className="home-text072">Pricing</span>
              <span className="home-text073">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text075">App</span>
              <span className="home-text076">Download iOS app</span>
              <span className="home-text077">Download Android app</span>
              <span className="home-text078">Log in to Portal</span>
              <span className="home-text079">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text081">Company</span>
              <span className="home-text082">About us</span>
              <span className="home-text083">Culture</span>
              <span className="home-text084">Code of conduct</span>
              <span className="home-text085">Careers</span>
              <span className="home-text086">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text088">Invest</span>
              <span className="home-text089">Commodity</span>
              <span className="home-text090">Savings</span>
              <span className="home-text091">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text094">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text097">Security</span>
              <span className="home-text098">Security status</span>
              <span className="home-text099">ISO</span>
              <span className="home-text100">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text102">Follow</span>
              <span className="home-text103">Instagram</span>
              <span className="home-text104">Twitter</span>
              <span className="home-text105">Facebook</span>
              <span className="home-text106">Tik Tok</span>
              <span className="home-text107">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
