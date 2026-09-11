export interface Social {
  id: string;
  label: string;
  handle: string;
  href: string;
  icon: 'github' | 'linkedin' | 'x' | 'mail';
}

export const socials: Social[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'ThadDev',
    href: 'https://github.com/ThadDev',
    icon: 'github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Thaddeus Ugwu',
    href: 'https://linkedin.com/in/thaddeus-ugwu-33880534b',
    icon: 'linkedin',
  },
  {
    id: 'x',
    label: 'X / Twitter',
    handle: '@thaddev_',
    href: 'https://x.com/thaddev_',
    icon: 'x',
  },
  {
    id: 'email',
    label: 'Email',
    handle: 'thaddeusugwu2006@gmail.com',
    href: 'mailto:thaddeusugwu2006@gmail.com',
    icon: 'mail',
  },
];
