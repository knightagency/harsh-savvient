import * as React from "react"
import { Link } from "gatsby"
import MackeyWhite from "../images/logo-white.svg";
import SFLOGO from "../images/SF_LOGO.png";
import DSLOGO from "../images/DS_LOGO.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const links = [
  {
    'title': 'Services',
    'link': '/expertsinbusiness/',
    'data': [{
      'title': "Corporate Advisory",
      'link': "/corporate-advisory/"
    }, {
      'title': "Restructuring",
      'link': "/restructuring/"
    }, {
      'title': "Insolvency",
      'link': "/insolvency/"
    }]
  },
  {
    'title': 'Insights',
    'link': '/insights/',
    'data': [{
      'title': "News & articles",
      'link': "/insights/#news-articles"
    }, {
      'title': "Events",
      'link': "/insights/#events"
    }, {
      'title': "Case studies",
      'link': "/insights/#backinbusiness"
    }
      // ,{
      //   'title': "Testimonials",
      //   'link': "/insights"
      // }
    ]
  },
  {
    'title': 'The MG Way',
    'link': '/mg-way/',
    'data': [{
      'title': "People",
      'link': "/mg-way/#people"
    }, {
      'title': "About us",
      'link': "/mg-way/#about"
    }, {
      'title': "Our approach",
      'link': "/mg-way/#why-mg"
    }, {
      'title': "History",
      'link': "/mg-way/#history"
    }, {
      'title': "Careers",
      'link': "/mg-way/#careers"
    }, {
      'title': "Community support",
      'link': "/mg-way/#community-support"
    }]
  },
  {
    'title': "Careers",
    'link': '/mg-way/#careers',
    'data': [{
      'title': "Work with Australia’s leading Corporate Advisory",
      "link": "/mg-way/#careers",
    }]
  }
]

const FooterMain = ({ siteTitle }) => {
  const [showModal, setModal] = React.useState('');
  React.useEffect(() => {
     if(window.location.href.includes('thank-you')){
      setModal('<script type="text/javascript">_linkedin_partner_id = "2334636";window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];window._linkedin_data_partner_ids.push(_linkedin_partner_id);</script><script type="text/javascript">(function(l) {if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s = document.getElementsByTagName("script")[0];var b = document.createElement("script");b.type = "text/javascript";b.async = true;b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b, s);})(window.lintrk);</script><noscript><img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=2334636&fmt=gif" /></noscript>')
     } else {
      setModal('');
     }
     return () => {
       setModal('');
     }
   }, [])
  return (<footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-4 col-xs-12">
          <img src={MackeyWhite} alt="Mackay" />
          <h3 style={{marginTop: 20, fontStyle: 'italic', fontSize: 16}}>Powers</h3>
          <ul>
            <li key={0}><a href={"https://australiandebtsolvers.com.au/"} target="_blank"><img style={{width:100}} src={DSLOGO} alt="Mackay" /></a></li>
            <li key={1}><a href={"https://simplyfunds.com.au/"} target="_blank"><img style={{width:100}} src={SFLOGO} alt="Mackay" /></a></li>
          </ul>
        </div>
        {links.map((link, key) => {
          return (
            <div className="col-lg-2 col-md-4 col-xs-12" key={key}>
              <h3><Link to={link.link}>{link.title}</Link></h3>
              <ul>
                {link.data.map((data, key) => {
                  return <li key={key}><AnchorLink to={data.link}>{data.title} </AnchorLink></li>
                })}
              </ul>
            </div>
          )
        })}
        <div className="col-lg-2 col-md-4 col-xs-12">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://au.linkedin.com/company/mackay-goodwin" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
            <li><a href="https://www.facebook.com/MackayGoodwinAU" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
            <li><a href="https://twitter.com/GoodwinMackay" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
            <li><a href="https://www.youtube.com/channel/UCG7SWnAcd3R7SLLXM-erfeQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
            <li><a href="https://www.instagram.com/mackay.goodwin/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="row bottom">
        <div className="col-md-8 col-sm-12 legal">© 2021 All rights reserved   |   Mackay Goodwin Corporate Restructuring and Advisory</div>
        <div className="col-md-4 col-sm-12 text-end legal"><Link to="/privacy-policy">Legal & Privacy</Link></div>
      </div>
    </div>
    <div dangerouslySetInnerHTML={{__html: showModal }} />
  </footer>
)}

export default FooterMain
