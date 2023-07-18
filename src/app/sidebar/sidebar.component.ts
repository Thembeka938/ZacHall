import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items: any[] = [
    { icon: 'notifications', label: 'Notifications' },
    { icon: 'security', label: 'Security' },
    { icon: 'light', label: 'Theme' },
    { icon: 'image', label: 'Chat Wallpaper' },
    { icon: 'block', label: 'Blocked' },
    { icon: 'computer', label: 'Desktop Settings' },
    { icon: 'keyboard_capslock', label: 'Keyboard Shortcuts' },
    { icon: 'help', label: 'Help' }
  ];
}
