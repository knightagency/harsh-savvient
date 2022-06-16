import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TopBanner from "../components/top-banner"
import GetInTouch from "../components/get-in-touch"
import GetInTouchPDF from "../components/get-in-touch-pdf"

// const whyMG = [
//   {
//     "title": "Liquidation",
//     "text":"We’re in the business of resolution. Backed by leading technology and innovative thinking, we make the right decisions at the right time. Capturing opportunity and avoiding obstacles. Delivering the best possible outcome, every day."
//   },
//   {
//     "title": "Receivership",
//     "text":"To achieve success takes determination and focus. We leave no stone unturned. Tailoring solutions to meet your specific needs, on top of every moment. Getting you where you need to be, step by step."
//   },
//   {
//     "title": "Personal Insolvency",
//     "text":"We know time is of the essence. So we put positive action into practice. Taking the initiative, we anticipate your needs and move ahead as swiftly as possible, all without missing a trick."
//   }
// ]

const Post = ({ data }) => {
  const [glimit,setLimit] = React.useState(6);
  const [showLm,setLm] = React.useState(true);
  const loadMore = () => {
    setLimit(glimit+6);
    if((glimit+6)>=data.wpPost.backInBusiness.eventGallery.length){
      setLm(false);
    }
  }
  let breadCrumbs = [
    { link: "/", title: "Home" },
    { title: data.wpPost?.title }
  ]

  if (data.wpPost === null && data.wpArticle !== null) {
    data.wpPost = data.wpArticle;
    breadCrumbs = [
      { link: "/", title: "Home" },
      { link: "/insights", title: "Insights" },
      { link: "/news", title: "News and Articles" },
      { title: data.wpPost.title }
    ]
  } else if (data.wpPost === null && data.wpBusiness !== null) {
    data.wpPost = data.wpBusiness;

    breadCrumbs = [
      { link: "/", title: "Home" },
      { link: "/insights", title: "Insights" },
      { link: "/back-in-business", title: "Back in business" },
      { title: data.wpPost.title }
    ]
  } else if (data.wpPost === null && data.wpEvent !== null) {
    data.wpPost = data.wpEvent;
    data.wpPost.backInBusiness = data.wpPost.eventsOption

    breadCrumbs = [
      { link: "/", title: "Home" },
      { link: "/insights", title: "Insights" },
      { link: "/events", title: "Events" },
      { title: data.wpPost.title }
    ]
  }
  return (<div className="service insolvency posts">
    <Layout>
      <Seo title={data.wpPost?.metaFields?.metaTitle} description={data.wpPost?.metaFields?.metaDescription} />
      <TopBanner
        title={data.wpPost.title}
        subtitle={data.wpPost.backInBusiness?.subTitle}
        text={''}
        bannerImg={data.wpPost?.featuredImage?.node}
        breadCrumbs={breadCrumbs}
        // btn={typeof window !== 'undefined' && window.location.pathname === '/insights/business-survival-pack/' ? false : true}
        btn={false}
        btnTxt={data.wpPost.backInBusiness?.eventStatus == '' ? '' : (data.wpPost.backInBusiness?.eventStatus == 'enablevideoaccess' ? 'Watch Now' : data.wpPost.backInBusiness?.buttonLabel)}
        sendUrl={data.wpPost.backInBusiness?.eventStatus == 'enablevideoaccess' ? data.wpPost.backInBusiness.recordingUrl?.url : data.wpPost.backInBusiness?.registerUrl}
        downloadBtn2={typeof window !== 'undefined' && window.location.pathname === '/insights/business-survival-pack/' ? true : false}
      />


      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 detailPost">
            <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }}></div>
          </div>
        </div>
      </div>
      {data.wpPost.backInBusiness?.eventGallery!=null?
      <div className="eventgallery_sec">
        <div className="container">
            <ul>
            {data.wpPost.backInBusiness.eventGallery!=null && data.wpPost.backInBusiness.eventGallery.map((d,key) => {
              return key<glimit?<li key={key}><div className="event_gsthum"><img src={d.eventGalleryImage.mediaItemUrl} alt={d.eventGalleryImage.altText} /></div></li>:null
            })}
            </ul>
            <div className="me-5 text_center">
              {data.wpPost.backInBusiness.eventGallery!=null && showLm?<button className="btn btn-primary " onClick={()=>loadMore()}>View More</button>:null}
            </div>
        </div>
      </div>
      :null}
      {data.wpPost.backInBusiness?.sponsorsLogo!=null?
      <div className="sponser_sec">
        <div className="container">
        <h2>Thank you to our sponsors for your support!</h2>
          <ul>
            {data.wpPost.backInBusiness.sponsorsLogo.map((d,key) => {
              return <li key={key}><Link target="_blank" to={d.sponsorsLogoLink}><img src={d.sponsorsLogoImage.mediaItemUrl} alt={d.sponsorsLogoImage.altText} /> </Link> </li>
            })}
          </ul>
        </div>
      </div>
      :null}
      {typeof window !== "undefined" && window.location.pathname.indexOf("/insights/business-survival-pack") >= 0 && <GetInTouchPDF
        title={'Download e-guide'}
        text={'Download your free copy today and get on the path to recovery'}
      />}
      {typeof window !== "undefined" && window.location.pathname.indexOf("/insights/business-survival-pack") < 0 && <GetInTouch
        title={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchTitle}
        text={data.allWp.nodes[0].themeGeneralSettings.themeGeneralSettings.getInTouchDescription}
      />}
    </Layout>
  </div>
  )
}
export const query = graphql`
query ($id: String) {
    wpPost(id: {eq: $id}) {
      title
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      metaFields {
        metaDescription
        metaTitle
      }
    }
    wpArticle(id: {eq: $id}) {
      title
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      metaFields {
        metaDescription
        metaTitle
      }
    }
    wpBusiness(id: {eq: $id}) {
      title
      content
      backInBusiness {
        subTitle
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      metaFields {
        metaDescription
        metaTitle
      }
    }
    wpEvent(id: {eq: $id}) {
      title
      content
      eventsOption {
        subTitle
        buttonLabel
        registerUrl
        eventStatus
        recordingUrl {
          url
        }
        sponsorsLogo{
          sponsorsLogoImage{
            altText
            mediaItemUrl
          }
          sponsorsLogoLink
        }
        eventGallery{
          eventGalleryImage{
            altText
            mediaItemUrl
          }
        }
        shortDescription
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      metaFields {
        metaDescription
        metaTitle
      }
    }
    allWp {
      nodes {
        themeGeneralSettings {
          themeGeneralSettings {
            copyrightText
            expertAdviceLink
            expertAdviceTitle
            fieldGroupName
            getInTouchDescription
            getInTouchTitle
            speakExpertLink
            speakExpertTitle
          }
        }
      }
    }
  }
`

export default Post
