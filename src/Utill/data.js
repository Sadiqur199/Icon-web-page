import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarChart, faCalendar, faChain, faClock, faCloud, faComment, faEnvelope,faHome, faHeart, faCog, faPen, faTrash, faDroplet, faCode, faUser, faBug } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faGithub, faReact, faLinkedin, faWordpress, faApple, faDocker, faAmazon } from '@fortawesome/free-brands-svg-icons';

const icons = [
  { name: 'Facebook', icon: faFacebook, category: 'brand',subCategory:'F' },
  { name: 'Twitter', icon: faTwitter, category: 'brand',subCategory:'T' },
  { name: 'Instagram', icon: faInstagram, category: 'brand',subCategory:'I' },
  { name: 'Github', icon: faGithub, category: 'brand',subCategory:'G' },
  { name: 'React', icon: faReact, category: 'brand',subCategory:'R' },
  { name: 'User', icon: faUser, category: 'free',subCategory:'U' },
  { name: 'Apple', icon: faApple, category: 'free',subCategory:'A' },
  { name: 'Pen', icon: faPen, category: 'free',subCategory:'P' },
  { name: 'Cog', icon: faCog, category: 'sharp',subCategory:'C' },
  { name: 'Heart', icon: faHeart, category: 'sharp',subCategory:'H' },
  { name: 'Amazon', icon: faAmazon, category: 'sharp',subCategory:'A' },
  { name: 'Home', icon: faHome, category: 'sharp',subCategory:'H' },
  { name: 'Calender', icon: faCalendar, category: 'classic',subCategory:'C' },
  { name: 'Clock', icon: faClock, category: 'classic',subCategory:'C' },
  { name: 'Cloud', icon: faCloud, category: 'classic',subCategory:'C' },
  { name: 'Bug', icon: faBug, category: 'free',subCategory:'B' },
  { name: 'Docker', icon: faDocker, category: 'free',subCategory:'D' },
  { name: 'Chain', icon: faChain, category: 'classic',subCategory:'C' },
  { name: 'Trash', icon: faTrash, category: 'sharp',subCategory:'T' },
  { name: 'Wordpress', icon: faWordpress, category: 'classic',subCategory:'W' },
  { name: 'BarChart', icon: faBarChart, category: 'sharp',subCategory:'B' },
  { name: 'Code', icon: faCode, category: 'free',subCategory:'C' },
  { name: 'Comment', icon: faComment, category: 'classic',subCategory:'C' },
  { name: 'Droplet', icon: faDroplet, category: 'sharp',subCategory:'D' },
  { name: 'Envelope', icon: faEnvelope, category: 'free',subCategory:'E' },
  { name:'LinkedIn',icon: faLinkedin, category: 'brand',subCategory:'L' },
];


export default icons;