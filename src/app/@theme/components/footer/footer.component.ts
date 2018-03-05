import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">©2018 ZOOM团队——</span>
    <div class="socials">
      <a href="https://github.com/Asimple-L/zoom" target="_blank" class="ion ion-social-github"></a>
      <a href="https://github.com/Asimple-L/zoom" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://github.com/Asimple-L/zoom" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://github.com/Asimple-L/zoom" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
