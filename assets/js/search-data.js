// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Hello_SY.J/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research and hands-on projects, from tape-outs to microcontroller builds.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Hello_SY.J/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed publications. First-author IC papers are in preparation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Hello_SY.J/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Seoyeong Jang — EECE Ph.D. applicant. Download the PDF with the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Hello_SY.J/cv/";
          },
        },{id: "projects-low-noise-amplifier-for-eis-in-a-battery-monitoring-ic",
          title: 'Low-Noise Amplifier for EIS in a Battery-Monitoring IC',
          description: "Research internship at KAIST (Kwon Research Group). Systematic gm/ID sizing of an LNA for electrochemical impedance spectroscopy in a high-voltage BMIC.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/eis-lna-bmic/";
            },},{id: "projects-emg-based-prosthetic-arm-on-an-mcu",
          title: 'EMG-Based Prosthetic Arm on an MCU',
          description: "Filtered and feature-extracted EMG/EOG signals on an ATmega128 and mapped them to prosthetic-limb movements.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/emg-prosthetic-arm/";
            },},{id: "projects-low-cost-eye-drawing-platform-using-eog",
          title: 'Low-Cost Eye-Drawing Platform Using EOG',
          description: "Analog front end plus a MATLAB mapping algorithm that turns electrooculography signals into drawing strokes. Grand Award, Hanyang Academic Conference.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/eog-eye-drawing/";
            },},{id: "projects-graphene-cnf-e-tattoos-for-non-invasive-drug-delivery",
          title: 'Graphene/CNF E-Tattoos for Non-Invasive Drug Delivery',
          description: "Undergraduate research at Hanyang. Outstanding Research Award from the Dean of Biomedical Engineering.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/graphene-etattoo/";
            },},{id: "projects-bare-metal-34-key-digital-piano",
          title: 'Bare-Metal 34-Key Digital Piano',
          description: "MCU application competition winner (Minister of Education Award). 486 NeoPixels animated in sync with playback under tight memory limits.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/mcu-digital-piano/";
            },},{id: "projects-research-plugin-amp-skills-for-circuit-paper-analysis",
          title: 'Research Plugin &amp;amp; Skills for Circuit-Paper Analysis',
          description: "Lab-wide Codex plugin for paper discovery and structured analysis. I own the multi-representation retrieval (RAG) component.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/paper-analysis-plugin/";
            },},{id: "projects-luminescent-silk-biomaterials-with-a-large-stokes-shift",
          title: 'Luminescent Silk Biomaterials with a Large Stokes Shift',
          description: "Optical characterization of silk-protein biomaterials. Published in ACS Biomaterials Science &amp; Engineering (IF 5.4).",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/silk-fluorescent/";
            },},{id: "projects-reference-free-supply-locked-ring-oscillator-temperature-sensor",
          title: 'Reference-Free Supply-Locked Ring-Oscillator Temperature Sensor',
          description: "M.S. thesis. A standard-cell temperature sensor with no crystal and no bandgap, locked by a PLL-based supply loop.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/temp-sensor/";
            },},{id: "projects-real-time-3-d-panoramic-projection-for-vr",
          title: 'Real-Time 3-D Panoramic Projection for VR',
          description: "Research internship at KAIST (Prof. Hoi-Jun Yoo). Real-time panoramic projection optimized for a mobile platform.",
          section: "Projects",handler: () => {
              window.location.href = "/Hello_SY.J/projects/vr-panorama/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/Hello_SY.J/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%65%6F%79%6F%75%6E%67_%6A%61%6E%67@%6B%61%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/Hello_SY.J/feed.xml", "_blank");
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
