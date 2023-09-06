import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
})
export class ToggleSwitchComponent {
  darkModeActivated = false;
  colorList: any = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'danger',
    'dark',
    'medium',
  ];

  constructor() { }

  toggleDarkMode(ev: any) {
    const toggleChecked = ev.detail.checked;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (systemDark.matches) {
      if (toggleChecked) {
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
      }
    } else {
      this.darkModeActivated = false;
      console.log('Dark mode not supported for this device');
    }
  }
}
