import { navItems } from "./Nav.astro";

<Fragment>
<div role="banner" class="navbar w-nav" {...{ "data-animation": "default", "data-collapse": "medium", "data-duration": "400", "data-easing": "ease", "data-easing2": "ease" }}>
{/** Fixed Nav Menu */}
<div class="fixed-nav-menu-container" {...{ "data-w-id": "03aa365d-5a97-c030-89a8-6b2e3f75ae4f" }}>
<div class="menu-toggle close" {...{ "data-w-id": "03aa365d-5a97-c030-89a8-6b2e3f75ae5f" }}>
<div class="menu-lines w-embed">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.05929 5.93367L12.009 0.983887L13.4232 2.3981L8.47349 7.34787L13.4232 12.2976L12.009 13.7118L7.05929 8.76207L2.10952 13.7118L0.695312 12.2976L5.64509 7.34787L0.695312 2.3981L2.10952 0.983887L7.05929 5.93367Z" fill="currentColor"></path>
</svg>
</div>
<div class="border-circle"></div>
<div class="fill-circle"></div>
</div>
<div class="fixed-nav-menu-wrapper">
<div class="fixed-nav-menu">
<div class="nav-links">
{navItems.map((item) => (
<Fragment><a href={item.link} class={`nav-menu-link ${item.text === "Home" ? "w--current" : ""}`} {...{ "aria-current": "page" }}>
{item.text}
</a></Fragment>
))}
{/** <a href="#Work" class="nav-menu-link">Work</a
        ><a href="about.html" class="nav-menu-link">About</a
        ><a href="/contact" class="nav-menu-link">Contact</a> */}
</div>
</div>
<div class="nav-bg"></div>
</div>
</div>
{/** Fixed Nav Menu ends */}
{/** Nav Container */}
<div class="nav-container">
<div class="menu-toggle" {...{ "data-w-id": "03aa365d-5a97-c030-89a8-6b2e3f75ae62" }}>
<div class="menu-lines w-embed">
<svg width="22" height="10" viewBox="0 0 22 10" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="1.53841" rx="0.769206" fill="currentColor"></rect>
<rect y="8.46155" width="15.7143" height="1.53841" rx="0.769206" fill="currentColor"></rect>
</svg>
</div>
<div class="fill-circle"></div>
<div class="border-circle"></div>
</div>
{/** TODO: Replace Image */}
{/** <a href="/" aria-current="page" class="brand w-nav-brand w--current"
      >
      <img
        src="https://uploads-ssl.webflow.com/64ac1ab9a54f83f58d02a039/64b3dfc1dac67d4398e670cf_Logo.svg"
        loading="lazy"
        alt=""
        class="logo"
      /></a
    > */}
<nav role="navigation" class="nav-menu-container w-nav-menu">
<div class="nav-links-wrapper">
{navItems.map((item) => (
<Fragment><a href={item.link} class={`nav-link  group ${item.text === "Home" ? "hidden" : "w-inline-block"}`}>
<div class="nav-link-text">{item.text}</div>
<div class="nav-dot opacity-0 group-hover:opacity-100 transition-all duration-300" />
</a></Fragment>
))}
{/** <a href="about.html" class="nav-link w-inline-block"
          ><div class="nav-link-text">About</div>
          <div class="nav-dot"></div></a
        ><a href="/contact" class="nav-link w-inline-block"
          ><div class="nav-link-text">Contact</div>
          <div class="nav-dot"></div
        ></a> */}
</div>
</nav>
</div>
{/** Nav Container Ends */}
</div>

{/** <style>
      .navbar \\{
        z-index: 5;
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
        padding: 30px 40px;
        position: fixed;
        top: 0%;
        bottom: auto;
        left: 0%;
        right: 0%;
      \\}
      .w-inline-block \\{
        max-width: 100%;
        display: inline-block;
      \\}
      .w-nav \\{
        z-index: 1000;
        background: #ddd;
        position: relative;
      \\}
      .w-nav:before,
      .w-nav:after \\{
        content: " ";
        grid-area: 1 / 1 / 2 / 2;
        display: table;
      \\}
    
      .w-nav:after \\{
        clear: both;
      \\}
    
      .w-nav-brand \\{
        float: left;
        color: #333;
        text-decoration: none;
        position: relative;
      \\}
    
      .w-nav-link \\{
        vertical-align: top;
        color: #222;
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        text-decoration: none;
        display: inline-block;
        position: relative;
      \\}
    
      .w-nav-link.w--current \\{
        color: #0082f3;
      \\}
    
      .w-nav-menu \\{
        float: right;
        position: relative;
      \\}
    
      [data-nav-menu-open] \\{
        text-align: center;
        min-width: 200px;
        background: #c8c8c8;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        overflow: visible;
        display: block !important;
      \\}
    
      .w--nav-link-open \\{
        display: block;
        position: relative;
      \\}
    
      .w-nav-overlay \\{
        width: 100%;
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        overflow: hidden;
      \\}
    
      .w-nav-overlay [data-nav-menu-open] \\{
        top: 0;
      \\}
    
      .w-nav[data-animation="over-left"] .w-nav-overlay \\{
        width: auto;
      \\}
    
      .w-nav[data-animation="over-left"] .w-nav-overlay,
      .w-nav[data-animation="over-left"] [data-nav-menu-open] \\{
        z-index: 1;
        top: 0;
        right: auto;
      \\}
    
      .w-nav[data-animation="over-right"] .w-nav-overlay \\{
        width: auto;
      \\}
    
      .w-nav[data-animation="over-right"] .w-nav-overlay,
      .w-nav[data-animation="over-right"] [data-nav-menu-open] \\{
        z-index: 1;
        top: 0;
        left: auto;
      \\}
    
      .w-nav-button \\{
        float: right;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 18px;
        font-size: 24px;
        display: none;
        position: relative;
      \\}
    
      .w-nav-button:focus \\{
        outline: 0;
      \\}
    
      .w-nav-button.w--open \\{
        color: #fff;
        background-color: #c8c8c8;
      \\}
    
      .w-nav[data-collapse="all"] .w-nav-menu \\{
        display: none;
      \\}
    
      .w-nav[data-collapse="all"] .w-nav-button,
      .w--nav-dropdown-open,
      .w--nav-dropdown-toggle-open \\{
        display: block;
      \\}
    
      .w--nav-dropdown-list-open \\{
        position: static;
      \\}
    
      @media screen and (max-width: 991px) \\{
        .w-nav[data-collapse="medium"] .w-nav-menu \\{
          display: none;
        \\}
    
        .w-nav[data-collapse="medium"] .w-nav-button \\{
          display: block;
        \\}
      \\}
    
      @media screen and (max-width: 767px) \\{
        .w-nav[data-collapse="small"] .w-nav-menu \\{
          display: none;
        \\}
    
        .w-nav[data-collapse="small"] .w-nav-button \\{
          display: block;
        \\}
    
        .w-nav-brand \\{
          padding-left: 10px;
        \\}
      \\}
    
      .fixed-nav-menu-container \\{
        z-index: 10;
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        background-color: rgba(24, 27, 46, 0.8);
        justify-content: flex-end;
        display: none;
        position: fixed;
        top: 0%;
        bottom: 0%;
        left: 0%;
        right: 0%;
        overflow: hidden;
      \\}
    
      .menu-toggle \\{
        z-index: 5;
        width: 50px;
        height: 50px;
        opacity: 0;
        color: #181b2e;
        cursor: pointer;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        margin-top: auto;
        margin-bottom: auto;
        display: flex;
        position: absolute;
        top: 0%;
        bottom: 0%;
        left: auto;
        right: 40px;
        overflow: hidden;
        transform: scale(0);
      \\}
    
      .menu-toggle:hover \\{
        color: #fff;
      \\}
    
      .menu-toggle.close \\{
        z-index: 11;
        opacity: 1;
        top: 40px;
        bottom: auto;
        left: auto;
        right: 40px;
        transform: none;
      \\}
    
      .menu-lines \\{
        justify-content: center;
        align-items: center;
        display: flex;
      \\}
    
      /*  */








































































































































































































































        .w - embed}:before,
.w-embed:after \\{content}: " ";
grid-area: 1 / 1 / 2 / 2;
display: table;
  \\}

.w-embed:after \\{clear}: both;
  \\}
/*  */

.border-circle \\{z - index}: -2;
width: 100%;
height: 100%;
border: 2px solid #181b2e;
border-radius: 50%;
position: absolute;
  \\}
.fill-circle \\{z - index}: -1;
width: 50px;
height: 50px;
background-color: #181b2e;
border-radius: 50%;
position: absolute;
top: 0%;
bottom: 0%;
left: 0%;
right: 0%;
transform: translate(0, 50px);
  \\}

.fixed-nav-menu \\{z - index}: 10;
width: 100%;
height: 100%;
grid-row-gap: 40px;
flex-direction: column;
justify-content: center;
padding: 100px;
display: flex;
position: relative;
  \\}

.nav-links \\{grid - row - gap}: 30px;
flex-direction: column;
display: flex;
  \\}

.fixed-nav-menu-wrapper \\{z - index}: 10;
width: 40%;
position: relative;
overflow: hidden;
  \\}
.nav-menu-link \\{color}: #181b2e;
letter-spacing: -0.038rem;
font-family: Outfit, sans-serif;
font-size: 4.25rem;
font-weight: 500;
line-height: 5.125rem;
transition: all 0.3s;
  \\}

.nav-menu-link:hover \\{color}: #fe5621;
letter-spacing: 0.25rem;
  \\}
.nav-bg \\{z - index}: -1;
background-color: #fff;
border-radius: 530px;
position: absolute;
top: 0%;
bottom: 0%;
left: 0%;
right: 0%;
transform: scale(1.6);
  \\}

.nav-container \\{width}: 100%;
margin-left: 0;
margin-right: 0;
  \\}
.nav-menu-container \\{display}: flex;
overflow: hidden;
  \\}

.nav-links-wrapper \\{grid - column - gap}: 25px;
display: flex;
  \\}

.nav-link \\{grid - row - gap}: 8px;
color: #181b2e;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 12.5px;
font-family: Outfit, sans-serif;
font-size: 1rem;
font-weight: 500;
line-height: 1.3125rem;
display: flex;
overflow: hidden;
  \\}
.nav-dot \\{width}: 5px;
height: 5px;
background-color: #181b2e;
border-radius: 50%;
  \\}
@media screen and (max-width: 479px) \\{
        .nav - links} \\{grid - row - gap}: 40px;
    \\}
.fixed-nav-menu-wrapper \\{width}: 70%;
    \\}
.w-nav[data-collapse="tiny"] .w-nav-menu \\{display}: none;
    \\}

.w-nav[data-collapse="tiny"] .w-nav-button \\{display}: block;
    \\}
  \\}

@media screen and (max-width: 767px) \\{
        .w - nav - brand} \\{padding - left}: 10px;
    \\}
.fixed-nav-menu \\{padding}: 40px;
    \\}
  \\}
@media screen and (max-width: 991px) \\{
        .navbar} \\{padding}: 20px;
    \\}
.fixed-nav-menu-container \\{display}: none;
    \\}
.menu-toggle \\{width}: 45px;
height: 45px;
opacity: 1;
right: 20px;
transform: none;
    \\}

.menu-toggle.close \\{top}: 20px;
bottom: auto;
left: auto;
right: 20px;
    \\}
.fixed-nav-menu-container \\{display}: none;
    \\}

.fixed-nav-menu \\{padding}: 60px;
    \\}

.fixed-nav-menu-wrapper \\{width}: 60%;
    \\}

.nav-menu-link \\{font - size}: 8vw;
line-height: 8vw;
    \\}
  \\}
</style> * /}/;
