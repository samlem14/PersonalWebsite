// =====================================================================
//  APP REGISTRY
//  This is the only file you edit to add something to the desktop.
//  Add one object to the array and it appears as a desktop icon AND
//  in the Start menu automatically.
// =====================================================================
//
//  Each entry supports:
//
//    id        string    Unique. Used as the React key and window id.
//    title     string    Shown under the icon, in the title bar, and
//                        on the taskbar button.
//    icon      component An icon component from ./components/Icons.jsx,
//                        or any React component that renders ~32x32.
//    kind      string    'window' opens a draggable window.
//                        'link'   opens a URL in a new browser tab.
//
//  For kind: 'window'
//    component component  The React component rendered inside the window.
//    width     number     Starting width in pixels.  Default 480.
//    height    number     Starting height in pixels. Default 360.
//
//  For kind: 'link'
//    url       string     The destination.
//
//  Optional for both:
//    onDesktop boolean    Set false to hide from the desktop but keep it
//                         in the Start menu. Defaults to true.
// =====================================================================

import AboutMe from './AboutMe.jsx';
import Credits from './Credits.jsx';
import Contact from './Contact.jsx';
import { Inetcpl1312, Awfxex32Info, Progman16, Awfxcg321304 } from '@react95/icons';


import {
  UserIcon,
  FilmIcon,
  MailIcon,
  GlobeIcon,
} from '../components/Icons.jsx';

export const apps = [
  {
    id: 'about',
    title: 'About Me',
    icon: Awfxex32Info,
    kind: 'window',
    component: AboutMe,
    width: 520,
    height: 420,
  },
  {
    id: 'credits',
    title: 'Credits',
    icon: Progman16,
    kind: 'window',
    component: Credits,
    width: 560,
    height: 380,
  },
  {
    id: 'imdb',
    title: 'IMDb',
    icon: Inetcpl1312,
    kind: 'link',
    // Replace with your own IMDb name page.
    url: 'https://www.imdb.com/name/nm0000000/',
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Awfxcg321304,
    kind: 'window',
    component: Contact,
    width: 440,
    height: 300,
  },
];

export const getApp = (id) => apps.find((a) => a.id === id);
