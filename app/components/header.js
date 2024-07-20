import Component from '@glimmer/component';

export default class HeaderComponent extends Component {
  get listNavigation() {
    let listNavigationLink = [
      {
        name: 'Home',
        link: 'index',
        isFirst: true,
      },
      {
        name: 'About',
        link: 'about',
        isFirst: false,
      },
   
    ];

    return listNavigationLink;
  }
}
