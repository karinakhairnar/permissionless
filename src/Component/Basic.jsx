import React from 'react';
import titleLogo from '../Logo/titleLogo.png';
import problem from '../Logo/problem.png';
import Fullstar from '../Logo/Fullstar.png';
import persons from '../Logo/persons.png';
import buyToken from '../Logo/buyToken.png';
import fullredstart from '../Logo/fullredstart.png';
import Governavers from '../Logo/Governavers.png';
import ROADMAP from '../Logo/ROADMAP.png';
import q42023 from '../Logo/q42023.png';
import q12023 from '../Logo/q12023.png';
import q22023 from '../Logo/q22023.png';
import q32023 from '../Logo/q32023.png';
import q42022 from '../Logo/q42022.png';

import background4 from '../Background/background4.png';

import './Basic.css';
const Basic = () => {
  return (
    <div>
      {/* First */}
      <div className='Banner'>
        <div>
          <div>
            <img src={titleLogo} alt='titleLogo' className='Img' />
          </div>
          <div className='title'>
            <div>
              <p className='titlepara'>READ WHITEPAPER</p>
            </div>
            <div>
              <p className='titlepara'>CONNECT WALLET</p>
            </div>
          </div>
          <div className='token'>
            <div>
              <p className='Tokenpara'>
                VENTURE-X (VX) is a First Decentralized Community Driven Venture
                Capital Fund that is powered by Blockchain Technology
              </p>
            </div>
            <div>
              <p className='buy'> Buy Token</p>
            </div>
          </div>
          <div>
            <p className='para'>
              VENTURE-X solves the common people desire of investing in seed
              stage start-ups and future unicorns through its platform by
              providing a level playing field for everyone and bring this
              private VC industry to public where anyone from anywhere can
              participate with relatively small investment.
            </p>
          </div>
        </div>
      </div>
      {/* second */}
      <div className='Banner2'>
        <div className='star'>
          <div className='banner2'>
            <div className='titleAbout'>
              <p className='TokenPara'>
                Venture-X plan to combine conventional VC industry and
                Blockchain technology making the start-up ecosystem so much more
                accessible, that ordinary and small retail investors can become
                part of huge Venture Capital Industry with relatively small
                investment as low as $50.
              </p>
              <p className='Tokenpara1'>
                Venture-X strives to create a situation where VCs of future will
                NOT be privately run rather, they would be run by the Community
                based on DAO protocols.
              </p>
            </div>
            <div className='TitleAbout'>
              <div className='aboutlogo'></div>
            </div>
          </div>
        </div>
        <div className='problem'>
          <div>
            <img src={problem} alt='problem' className='problemImg' />
          </div>
          <div>
            <p className='titlepara'>
              There's no avenue available which gives opportunity to common
              retail investor to participate in a VC Fund or private pool in IDO
              s and connects Start-ups with common investor.
            </p>
            <br />
            <p className='titlepara'>
              Even if one did find a potential company, putting all the eggs in
              one basket can be risky and diversifying your investment portfolio
              can be tedious.
            </p>
          </div>
          <div>
            <p className='titlepara'>
              The Venture Capital industry and Start-up investment are
              completely in the hands of private sector- where big players rule
              the entire industry and Investment game and having an unfair
              advantage of being first investor in any start-ups.
            </p>
            <br />
            <p className='titlepara'>
              VCs have created barriers to entry and only allows to Exclusive
              and Accredited Investors.Common Retail Investors have many options
              in their basket while investing-like investment in stocks, mutual
              funds, gold bonds, Real estate etc. except investment in seed
              stage start-ups and companies before they go public
            </p>
          </div>
          <div>
            <p className='titlepara'>
              The most important challenge Founders and startups face is to
              build a community for their product and services for which they Go
              all in and spend most of the funds they raised on marketing,
              branding and PR agencies.
            </p>
          </div>
        </div>
      </div>
      {/* third */}
      <div>
        <div className='solution'>
          <div className='solution1'>
            <p>
              VX is looking to solve the common people’s desire of investing in
              seed stage start-ups and future unicorns by providing a platform
              which brings them the power of VC & Angel Investor to grow
              exponentially as a seed investor in start-ups & unicorns. Thereby
              opening the doors that in the past remain a domain of large
              institutional investors and high net worth individuals.
            </p>
          </div>
          <div className='solution2'>
            <p>
              With no Accredited investor requirements and fully transparent and
              decentralized fund, we are looking to provide a level playing
              field for everyone and to bring this private VC industry to the
              public where anyone from anywhere can participate.
            </p>
            <p>
              Here with the VX projects/start-ups will not only get required
              funding and other benefits but a huge Community in the form of
              investors who have invested in VX fund and that too without
              spending anything on Marketing and Branding.
            </p>
            <p>
              VX will also assist them with Tech, Marketing and all the required
              support to help them onboard on Blockchain, Web3 and Metaverse.
            </p>
          </div>
        </div>
      </div>
      {/* Forth */}
      <div className='banner3'>
        <div className='bannersale'>
          <div className='bannersale'>
            <div className='circle'>
              <div className='round'></div>
              <div className='tokensale'></div>
            </div>
          </div>
          <div className='tokensalepara'>
            <p>
              Sign up and Open your investor account and complete the KYC
              Process by submitting the necessary KYC information. Once you have
              done that, log on to your dashboard and start Investing in your
              required packages and the offered VX Units ( One VX Unit equals to
              One VX Token )
            </p>
          </div>
        </div>
        <div>
          <div className='token'>
            <div className='token1'>
              <img src={buyToken} alt='buyToken' className='Img' />
            </div>
            <div>
              <img src={fullredstart} alt='fullredstart' className='Img' />
            </div>
            {/* <div className='fullredstar'></div> */}
          </div>
          <div className='governave'>
            <div>
              <p>
                Our Team is actively working on Governance Framework to make VX
                ecosystem completely transparent, decentralized and
                community-driven Fund. The Governance to the VX Unit holders
                will allow them to Vote & Validate the deals in the pool and
                also on the major decisions that are related to the future
                development and management of the VX ecosystem.
              </p>
            </div>
            <div className='Governavers'>
              <img src={Governavers} alt='Governavers' className='problemImg' />
            </div>
            <div>
              <p>
                The governance will play a key role in facilitating from
                centralized VC Fund controlled by single corporation to a
                decentralized platform that is autonomous and governed by
                community through protocols. The governance model of VX would
                eventually be more democratic and decentralized with the owners
                of VX units having real say in the functioning and a scope to
                voice their opinions on the directions of Venture-X.
              </p>
            </div>
          </div>
        </div>
        {/* <div className='fund'></div> */}
        <div className='fund'>
          <img src={background4} alt='background4' className='Img' />
        </div>
        <div className='persondetail'>
          <img src={persons} alt='persons' className='Img' />
        </div>
        {/* roadmap */}
        <div className='mapDetails'>
          <div className='ROADMAP'>
            <img src={ROADMAP} alt='ROADMAP' />
          </div>
          <div className='roadmapPara'>
            <p>
              Ut adipiscing enim, mauris suscipit ut turpis diam, tristique. Nec
              lorem viverra purus urna, netus. Ut turpis curabitur lorem
              scelerisque.
            </p>
            <p>
              Ut adipiscing enim, mauris suscipit ut turpis diam, tristique. Nec{' '}
            </p>
          </div>
          <div className='datemap'>
            <div>
              <img src={q42022} alt='q42022' />
              <p>
                Massa, mattis elit tincidunt faucibus porta enim integer dolor
                odio.
              </p>
            </div>
            <div>
              <img src={q12023} alt='q12023' />
              <p>Sed nibh congue tempus sit sit.</p>
            </div>
            <div>
              <img src={q22023} alt='q22023' />
              <p>Sed pharetra nibh condimentum id pellentesque.</p>
            </div>
            <div>
              <img src={q32023} alt='q32023' />
              <p>Nullam sed tincidunt dui vehicula porttitor.</p>
            </div>
            <div>
              <img src={q42023} alt='q42023' />
              <p>Morbi maecenas quis hendrerit nam neque.</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='footer'>
        <div className='footer1'>
          <div>
            <div>
              <h1>Connect with us</h1>
              <div>
                <div className='social'>
                  <p>TWITTER</p>
                  <p>INSTAGRAM</p>
                  <p>LINKDIN</p>
                </div>

                <div className='social'>
                  <p>MEDIUM</p>
                  <p>DISCORD</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Fullstar} alt='Fullstar' className='fullstar' />
          </div>
        </div>
        <div className='footer2'>
          <div className='footersec'>
            <div className='social'>
              <p>NEWSLETTER</p>
              <p style={{ color: 'grey' }}>ENTER EMAIL ID</p>
            </div>
            <div>
              <label className='buy'>SUBSCRIBE</label>
            </div>
          </div>
          <hr />
          <div className='footerlast'>
            <div>
              <div>
                <div>
                  <img src={titleLogo} alt='titleLogo' className='ImgFooter' />
                </div>
              </div>
            </div>
            <p className='buy'>QUICK LINKS</p>
            <div className='footerlast'>
              <div>
                <p>Token</p>
                <p>How it works</p>
              </div>
              <div>
                <p>FAQ</p>
                <p>Our Termms</p>
              </div>
              <div>
                <p>Team</p>
                <p>Whitepaper</p>
              </div>
              <div>
                <p>Contact</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
