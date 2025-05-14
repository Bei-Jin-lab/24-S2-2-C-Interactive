# Risk LOG 
## Decision Details 
- Date: 24/08/24
- Author: Bingkun Li
- Decision Maker: front-end team made
  
## Background 
The ANU CBE website will be accessed by a diverse group of users, including staff and students, who may use a wide range of devices and browsers. Ensuring consistent functionality and appearance across all major browsers is essential for providing a seamless user experience. The front-end team recognized the potential risks associated with browser compatibility, particularly when using modern web technologies and CSS features that may not be fully supported by all browsers, especially older versions of Internet Explorer or less common browsers.

## team member
  
  Front-end: BeiJin, Bingkun Li, Jinsong Xin
 

## Decision content

1.How can we ensure that the website remains compatible across different browsers, providing a consistent user experience?



## Decision Rationale 
1.Cross-browser Testing:
Conducting thorough cross-browser testing using tools such as BrowserStack or LambdaTest will allow us to identify and resolve compatibility issues across a wide range of browsers and devices. This testing should be integrated into the development cycle to catch issues early.

2.Use of Polyfills and Graceful Degradation:
Implementing polyfills for features not supported by older browsers can help ensure that the website remains functional even if certain advanced features are not available. Graceful degradation will be employed, allowing the site to deliver a consistent experience by providing alternative styling or functionality where needed.

3.Responsive Design Practices:
Ensuring that the website is built using responsive design practices will help maintain compatibility not only across different browsers but also across various screen sizes and resolutions. This includes using flexible grid layouts, media queries, and responsive images.


## Conclusion 
By implementing these strategies, the front-end team aims to deliver a website that provides a consistent and reliable experience across all major browsers and devices. Regular cross-browser testing and updates will be conducted to ensure ongoing compatibility as new browser versions are released.
