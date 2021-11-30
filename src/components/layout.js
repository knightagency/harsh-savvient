/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => {
    // let queryParams = [
    //   'utm_medium', //add or remove query parameters you want to transfer
    //   'utm_source',
    //   'utm_campaign',
    //   'something_else'
    // ]
    // // do not edit anything below this line
    // var links = document.querySelectorAll('a'); 

    // // check if links contain domain from the domainsToDecorate array and then decorates
    // for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
    //     //for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) { 
    //         //if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
    //             links[linkIndex].href = decorateUrl(links[linkIndex].href);
    //         //}
    //     //}
    // }
    // // decorates the URL with query params
    // function decorateUrl(urlToDecorate) {
    //     urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? urlToDecorate + '?' : urlToDecorate + '&';
    //     var collectedQueryParams = [];
    //     for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
    //         if (getQueryParam(queryParams[queryIndex])) {
    //             collectedQueryParams.push(queryParams[queryIndex] + '=' + getQueryParam(queryParams[queryIndex]))
    //         }
    //     }
    //     return urlToDecorate + collectedQueryParams.join('&');
    // }

    // // borrowed from https://stackoverflow.com/questions/831030/
    // // a function that retrieves the value of a query parameter
    // function getQueryParam(name) {
    //     if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search))
    //         return decodeURIComponent(name[1]);
    // }
    if (window.location.pathname.indexOf("/insights/business-survival-pack") < 0) {
      var href = window.location.href;
      if(document.getElementById('00N9D000002HWRA') && document.getElementById('00N9D000002HWRA').length > 0)
        document.getElementById('00N9D000002HWRA').value = href
      var hrefsplit = href.split('?');
      var param = hrefsplit[1]?.split('&');
      if (param && param.length > 0) {
        for (var i = 0; i < param.length; i++) {
          var a = param[i].split('=');
          if (a[0] == 'utm_source')
            document.getElementById('00N9D000002P5S5').value = a[1];
          if (a[0] == 'utm_medium')
            document.getElementById('00N9D000002Pe9F').value = a[1];
          if (a[0] == 'utm_campaign')
            document.getElementById('00N9D000002P5SA').value = a[1];
          if (a[0] == 'utm_content')
            document.getElementById('00N9D000002P5SF').value = a[1];
          if (a[0] == 'utm_term')
            document.getElementById('00N9D000002HWSI').value = a[1];
        }
      }

      //console.log('document.cookie---' + document.cookie);

      //document.getElementById('00N9D000002P061').value=window.location;
      var name1;
      // document.getElementById("00N9D000002HWTG").value = (name1 = new RegExp('(?:^|;\\s*)gclid=([^;]*)').exec(document.cookie)) ? name1.split(",")[1] : "";

      function setCookie(name, value, days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = name + "=" + value + expires;
      }
      function getParam(p) {
        var match = RegExp('[?&]' + p + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
      }
      var gclid = getParam('gclid');
      if (gclid) {
        var gclsrc = getParam('gclsrc');
        if (!gclsrc || gclsrc.indexOf('aw') !== -1) {
          setCookie('gclid', gclid, 90);
        }
      }
    }
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
