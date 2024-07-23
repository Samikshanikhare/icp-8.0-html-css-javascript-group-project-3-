function Func(){
    window.location.assign("htmlnote.html")

}
function Cssnote(){
    window.location.assign("cssnote.html")
}
function Jsnote(){
    window.location.assign("jsnote.html")
}
const dictionary = {
    html: "HTML (HyperText Markup Language) is the standard markup language used to create the structure and content of web pages.",
    css: "CSS (Cascading Style Sheets) is used for describing the presentation of a document written in HTML or XML, including colors, layout, and fonts.",
    js: "JavaScript is a programming language that enables interactive elements and dynamic content on web pages.",
    semantics: "Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.",
    responsiveDesign: "Responsive web design ensures that web pages render well on a variety of devices and window or screen sizes.",
    boxModel: "The CSS box model describes the rectangular boxes that are generated for elements in the document tree.",
    selectors: "CSS selectors are patterns used to select and style elements in an HTML document.",
    flexbox: "CSS Flexible Box Layout, commonly known as Flexbox, provides a more efficient way to lay out, align, and distribute space among items in a container.",
    grid: "CSS Grid Layout, also known as Grid, is a two-dimensional layout system for the web.",
    mediaQueries: "Media queries in CSS allow for different styles to be applied depending on the device and conditions.",
    transitions: "CSS transitions provide a way to control animation speed when changing CSS properties.",
    animations: "CSS animations allow animation of HTML elements without using JavaScript or Flash.",
    variables: "CSS custom properties (variables) allow for easy reuse of values throughout your CSS files.",
    canvas: "The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.",
    svg: "SVG (Scalable Vector Graphics) is an XML-based vector image format for two-dimensional graphics.",
    forms: "HTML forms are used to collect user input.",
    events: "JavaScript events are actions that occur as a result of something the user does or as a result of some other JavaScript code.",
    domManipulation: "Document Object Model (DOM) manipulation allows JavaScript to interact with the content and structure of HTML and XML documents.",
    asyncProgramming: "Asynchronous programming in JavaScript allows multiple things to happen at the same time.",
    es6: "ES6 (ECMAScript 2015) is a major update to JavaScript that introduces new features and syntax improvements.",
    modules: "JavaScript modules allow you to split your code into reusable pieces that can be imported and exported between different files.",
    promises: "JavaScript promises are objects that represent the eventual completion or failure of an asynchronous operation.",
    fetchApi: "The Fetch API provides an interface for fetching resources (including across the network).",
    localstorage: "LocalStorage is a way to store data in the browser that persists even when the browser window is closed.",
    webComponents: "Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.",
    responsiveImages: "Responsive images in HTML allow web pages to provide an appropriate image to each user based on the user's device, screen size, and other factors.",
    accessibility: "Web accessibility refers to the inclusive practice of ensuring there are no barriers that prevent interaction with, or access to, websites by people with disabilities.",
    seo: "Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
    progressiveWebApps: "Progressive Web Apps (PWAs) are web applications that are regular web pages or websites, but can appear to the user like traditional applications or native mobile applications.",
    security: "Web security encompasses various measures to protect websites and web applications from threats and vulnerabilities.",
    restApis: "RESTful APIs (Representational State Transfer APIs) are a type of web service that allows communication between computer systems over the internet using HTTP methods.",
    cookies: "Cookies are small pieces of data that websites store on a user's computer.",
    sessions: "Sessions allow you to store user data temporarily, typically across multiple pages or visits to a website.",
    http: "HTTP (Hypertext Transfer Protocol) is the protocol used by the World Wide Web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.",
    https: "HTTPS (HyperText Transfer Protocol Secure) is an extension of HTTP, providing secure communication over a computer network.",
    crossBrowserTesting: "Cross-browser testing ensures that a website or web application functions correctly across different web browsers.",
    webHosting: "Web hosting is a service that allows individuals and organizations to make their website accessible via the World Wide Web.",
    domainNames: "A domain name is the address used to access a website (e.g., www.example.com).",
    webStandards: "Web standards are specifications and guidelines for websites and web applications to ensure consistency, interoperability, and accessibility.",
    versionControl: "Version control systems (like Git) track changes to files and coordinate work on those files among multiple people.",
    deployment: "Deployment refers to the process of making a website or application available for use, typically on a server or hosting platform.",
    responsiveTypography: "Responsive typography adjusts the size, spacing, and layout of text to enhance readability and visual appeal on different devices and screen sizes."
};

function Func1() {
    const inputElement = document.getElementById('inputword');
    const resultElement = document.getElementById('result');
    const word = inputElement.value
    const information = dictionary[word]
    if (information) {
        resultElement.innerText = information
    }
    else {
        resultElement.innerText = "word not match"
    }

}