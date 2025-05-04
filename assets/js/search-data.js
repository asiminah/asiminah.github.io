// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-events",
          title: "Events",
          description: "Here is a list of number theory related events and conferences that I will attend/have attended.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/events/";
          },
        },{id: "nav-outreach",
          title: "Outreach",
          description: "Outreach is an important part of spreading mathematics and I am trying to help in any way I can.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Here are my current and past research interests, as well as descriptions of my past projects. Last updated October 2024.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Last updated January 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Here are all of my papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Here is a list of courses that I have taught, students I have mentored, prelims I have tutored, and a course I helped design materials for at the University of Connecticut.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-resources",
              title: "Resources",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/resources/";
              },
            },{id: "dropdown-courses-taught",
              title: "Courses Taught",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/courses/";
              },
            },{id: "dropdown-prelims",
              title: "Prelims",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/prelims/";
              },
            },{id: "projects-choosing-an-advisor",
          title: 'Choosing an Advisor',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/advisor/";
            },},{id: "projects-algebra-prelim",
          title: 'Algebra Prelim',
          description: "This page is intended as a resource for the PhD students at UConn taking the algebra prelim.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/algprelim/";
            },},{id: "projects-math-2210q-applied-linear-algebra",
          title: 'MATH 2210Q Applied Linear Algebra',
          description: "This is the Spring 2023 class webpage for Section 013 of MATH 2210Q Applied Linear Algebra at UConn.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/appliedlinalg/";
            },},{id: "projects-complex-analysis-prelim",
          title: 'Complex Analysis Prelim',
          description: "This page is intended as a resource for the PhD students at UConn taking the complex analysis prelim.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cpxprelim/";
            },},{id: "projects-applying-to-fellowships",
          title: 'Applying to Fellowships',
          description: "(working on this post)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fellowships/";
            },},{id: "projects-applying-to-grad-school",
          title: 'Applying to Grad School',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gradapps/";
            },},{id: "projects-how-to-conference",
          title: 'How to Conference',
          description: "(working on this post)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/how-to-conference/";
            },},{id: "projects-considering-grad-school",
          title: 'Considering Grad School?',
          description: "(working on this post)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/prep/";
            },},{id: "projects-studying-for-qualifying-exams",
          title: 'Studying for Qualifying Exams',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quals/";
            },},{id: "projects-applying-to-reus",
          title: 'Applying to REUs',
          description: "(working on this post)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reuapps/";
            },},{id: "projects-math-2705w-technical-writing-in-math",
          title: 'MATH 2705W Technical Writing in Math',
          description: "This is the Spring 2025 class webpage for Section 004 of MATH 2705W Technical Writing in Math at UConn. (This was also the Fall and Spring 2024 class webpage for my sections of MATH 2705W.)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/techwritingmath/";
            },},{id: "projects-geometry-and-topology-prelim",
          title: 'Geometry and Topology Prelim',
          description: "This page is intended as a resource for the PhD students at UConn taking the geometry and topology prelim.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/topprelim/";
            },},{id: "projects-writing-an-undergrad-thesis",
          title: 'Writing an Undergrad Thesis',
          description: "(working on this post)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/undergradthesis/";
            },},{id: "projects-how-to-write-a-cv",
          title: 'How to Write a CV',
          description: "(working on this post)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/writecv/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%68%61%6D%61%6B%69%6F%74%65%73@%66%6F%72%64%68%61%6D.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Asimina Hamakiotes", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
