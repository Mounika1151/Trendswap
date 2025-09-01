interface SubmenuItem {
    label: 'string';
    href: 'string';
  };    
  interface HeaderItem {
    label: 'string';
    href: 'string';
    submenu?: SubmenuItem[];
  };