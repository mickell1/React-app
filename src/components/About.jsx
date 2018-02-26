import React, { Component } from 'react';

//CSS
import { Grid, Col, Image, } from 'react-bootstrap';
import '../css/About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/code-tech.jpg" className="header-image" />
        <Grid>
          <h1>About Techstacks </h1>
          <p>
            A tech stack is a combination of software products and programming languages used to create a web or mobile
            application. Applications have two software components: client-side and server-side, also known as front-end
            and back-end. Each layer of the application builds on the features of the one below it, creating a stack.
            This diagram shows the major building blocks of a typical tech stack, but there can be other supporting
            components included. This page will list some of the current technologies and outline some of the different
            techstacks for the frontend & backend.
          </p>

          <h3>Front-end tech stack</h3>
          <p>
            The front-end is the visual part of your application that users will see and interact with. This interaction
            can happen through a web browser or a mobile app. When building for the web, the front-end tech stack is made
            up of:
          </p>
          <ul className="bullet-list">
            <li>HTML (Markup Language)</li>
            <li>CSS (Style Sheet Language)</li>
            <li>JavaScript (Scripting Language)</li>
          </ul>
          <p>
            Front-end frameworks are optional, though recommended:
            JavaScript frameworks include tools for building rich, interactive web experiences. Recommended: AngularJS,
            Backbone.js, ReactJS Presentation frameworks provide a standardized format for creating responsive web pages
            with clean aesthetics. Recommended: Bootstrap For a mobile app the tech stack is simply comprised of an iOS
            or Android app written in Objective-C/SWIFT or Java, respectively.
          </p>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/React.png" className="about-profile-pic" rounded />
            <h3>React</h3>
            <p>
              React (sometimes styled React.js or ReactJS) is a JavaScript library for building user interfaces.
              It is maintained by Facebook, Instagram and a community of individual developers and corporations.
              React allows developers to create large web-applications that use data and can change over time without
              reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes
              only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC)
              pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as
              AngularJS.
            </p>
          </Col>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Javascript-html.jpg" className="about-profile-pic" rounded />
            <h3>HTML, JavaScript & CSS</h3>
            <p>
              JavaScript often abbreviated as JS, is a high-level, interpreted programming language. It is a language
              which is also characterized as dynamic, weakly typed&  prototype-based . Alongside HTML and CSS, JavaScript
              is one of the three core technologies of World Wide Web content engineering. It is used to make webpages
              interactive and provide online programs, including video games. The majority of websites employ it,
              and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript
              engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all
              based on the ECMAScript specification, with some engines not supporting the spec fully, and with many
              engines supporting additional features beyond ECMA.
            </p>
            <p>
              HTML: marks the content up into different structural types, like paragraphs, blocks, lists, images, tables,
              forms, comments etc.
            </p>
            <br></br>
            <p>
              CSS: tells the browser how each type of element should be displayed, which may vary for different media
              (like screen, print or handheld device)
            </p>
            <br></br>
            <p>
            JavaScript: tells the browser how to change the web page in response to events that happen
            (like clicking on something, or changing the value in a form input)
            </p>
          </Col>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Java.jpg" className="about-profile-pic" rounded />
            <h3>Java</h3>
            <p>
              Java is a programming language and computing platform first released by Sun Microsystems in 1995.
              Java technology allows you to work and play in a secure computing environment. Upgrading to the latest
              Java version improves the security of your system, as older versions do not include the latest security
              updates.
            </p>
            <p>
              There are lots of applications and websites that will not work unless you have Java installed,
              and more are created every day. Java is fast, secure, and reliable. From laptops to datacenters,
              game consoles to scientific supercomputers, cell phones to the Internet.Java also allows you to play
              online games, chat with people around the world, calculate your mortgage interest, and view images in
              3D, just to name a few. Java is everywhere!
            </p>
            <p>
              The AngularJS framework works by first reading the HTML page, which has additional custom tag attributes
              embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page
              to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can
              be manually set within the code, or retrieved from static or dynamic JSON resources.
            </p>
          </Col>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Angular.png" className="about-profile-pic" rounded />
            <h3>AngularJS</h3>
            <p>
              AngularJS (commonly referred to as "Angular.js" or "AngularJS 1.X") is a JavaScript-based open-source
              front-end web application framework mainly maintained by Google and by a community of individuals and
              corporations to address many of the challenges encountered in developing single-page applications.
            </p>
            <p>
              The AngularJS framework works by first reading the HTML page, which has additional custom tag attributes
              embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page
              to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can
              be manually set within the code, or retrieved from static or dynamic JSON resources.
            </p>
          </Col>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Swift&objc.jpg" className="about-profile-pic" rounded />
            <h3>Swift & Objective-C</h3>
            <b>Swift</b>
            <p>
              Swift is a powerful and intuitive programming language for macOS, iOS, watchOS and tvOS. Writing Swift
              code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features
              developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.
            </p>
            <p>
              Swift is a fantastic way to write software, whether it’s for phones, desktops, servers, or anything else
              that runs code. It’s a safe, fast, and interactive programming language that combines the best in modern
              language thinking with wisdom from the wider Apple engineering culture and the diverse contributions
              from its open-source community. The compiler is optimized for performance and the language is optimized
              for development, without compromising on either. Swift is friendly to new programmers. It’s an
              industrial-quality programming language that’s as expressive and enjoyable as a scripting language.
              Writing Swift code in a playground lets you experiment with code and see the results immediately,
              without the overhead of building and running an app.
            </p>
            <b>Objective-C</b>
            <p>
              Objective-C is the primary programming language you use when writing software for OS X and iOS. It’s a
              superset of the C programming language and provides object-oriented capabilities and a dynamic runtime.
              Objective-C inherits the syntax, primitive types, and flow control statements of C and adds syntax for
              defining classes and methods. It also adds language-level support for object graph management and object
              literals while providing dynamic typing and binding, deferring many responsibilities until runtime.
            </p>
          </Col>

          <Col xs={12} sm={12} >
            <h3>Back-end tech stack</h3>
            <p>
              The back-end contains the business logic that works behind the scenes to drive your application. Users
              will never directly engage with the back-end, all information is passed back and forth through the front-end.
              The most well known example of a back-end tech stack is the LAMP stack (Linux, Apache, MySQL, PHP). More recent
              variations of this stack include Ruby or Python as the programming language instead of PHP. A programming
              language is selected along with a web framework written in that language. Frameworks are incredibly useful
              because they provide developers with vetted implementations of common web application features like user
              authentication and data access, saving them from re-inventing the wheel. Popular framework choices include:
            </p>
          </Col>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/NodeJS.png" className="about-profile-pic" rounded />
            <h3>NodeJS</h3>
            <p>
              Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code
              server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in
              JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web
              browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to
              produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js has
              become one of the foundational elements of the "JavaScript everywhere" paradigm,[5] allowing web application
              development to unify around a single programming language, rather than rely on a different language for writing
              server side scripts.
            </p>
          </Col>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/Microsoft-net.png" className="about-profile-pic" rounded />
            <h3>.Net</h3>
            <p>
              .NET is a free, cross-platform, open source developer platform for building many different types of applications.
              With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop,
              gaming, and IoT.
            </p>
            <b>Languages:</b>
            <p>
              You can write .NET apps in C#, F#, or Visual Basic.
            </p>
            <ul className="bullet-list">
              <li>C# is a simple, modern, object-oriented, and type-safe programming language.</li>
              <li>F# is a cross-platform, open-source, functional programming language for .NET. It also includes object-oriented and imperative programming.</li>
              <li>Visual Basic is an approachable language with a simple syntax for building type-safe, object-oriented apps.</li>
            </ul>
            <b>Cross Platform:</b>
            <p>
              Whether you're working in C#, F#, or Visual Basic, your code will run natively on any compatible OS.
              Different .NET implementations handle the heavy lifting for you:
            </p>
            <ul className="bullet-list">
              <li>.NET Core is a cross-platform .NET implementation for websites, servers, and console apps on macOS, Windows, and Linux.</li>
              <li>.NET Framework supports websites, services, desktop apps, and more on Windows.</li>
              <li>Xamarin/Mono is a .NET implementation for running apps on all the major mobile operating systems.</li>
            </ul>
          </Col>

          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/ruby.png" className="about-profile-pic" rounded />
            <h3>Ruby</h3>
            <p>
              Ruby is a language of careful balance, its blended parts of his
              languages such as (Perl, Smalltalk, Eiffel, Ada, and Lisp) to form a new language that balanced
              functional programming with imperative programming. Since its public release in 1995, Ruby has drawn devoted
              coders worldwide. In 2006, Ruby achieved mass acceptance. With active user groups formed in the world’s major
              cities and Ruby-related conferences filled to capacity. Ruby-Talk, the primary mailing list for
              discussion of the Ruby language, climbed to an average of 200 messages per day in 2006. It has dropped
              in recent years as the size of the community pushed discussion from one central list into many smaller
              groups. Ruby is ranked among the top 10 on most of the indices that measure the growth and popularity
              of programming languages worldwide (such as the TIOBE index). Much of the growth is attributed to the
              popularity of software written in Ruby, particularly the Ruby on Rails web framework. Ruby is also
              completely free. Not only free of charge, but also free to use, copy, modify, and distribute.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}

// export default About;
